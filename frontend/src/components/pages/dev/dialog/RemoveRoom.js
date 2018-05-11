import React, {Component} from 'react'
import FlatButton from "material-ui/FlatButton";
import Dialog from 'material-ui/Dialog'
import TextField from "material-ui/TextField";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table'

class RemoveRoom extends Component {
    onClose = () => {
        this.reset()
        // noinspection JSUnresolvedFunction
        this.props.trigger()
    }
    onDelete = () => {
        // console.log(this.state.rooms[this.state.lastSelected[0]].id)
        this.sendDeleteReq()
        this.reset()
        // noinspection JSUnresolvedFunction
        this.props.trigger()
    }
    reset = () => {
        this.setState({
            query: '',
            rooms: [],
            selected: [-1],
            lastSelected: [-1],
            disabled: true
        })
    }
    onQueryChange = (event) => {
        this.setState({query: event.target.value})
        this.queryDB()
    }
    queryDB = () => {
        fetch('/queryRooms', {
            body: JSON.stringify({
                query: this.state.query
            }),
            headers: {'content-type': 'application/json'},
            mode: 'cors',
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({rooms: data})
            })
    }
    sendDeleteReq = () => {
        fetch('/deleteRoom', {
            body: JSON.stringify({
                id: this.state.rooms[this.state.lastSelected[0]].id
            }),
            headers: {'content-type': 'application/json'},
            mode: 'cors',
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok === 'ok') {
                    this.reset()
                    // noinspection JSUnresolvedFunction
                    this.props.trigger()
                }
            })
    }
    handleRowSelection = (selectedRows) => {
        this.setState({lastSelected: this.state.selected, selected: selectedRows, disabled: selectedRows.length !== 1})

    }
    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    }

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            rooms: [],
            selected: [-1],
            lastSelected: [-1],
            disabled: true
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.onClose}/>,
            <FlatButton
                label="Delete Room"
                primary={true}
                disabled={false}
                onClick={this.onDelete}/>
        ]
        return (
            <div>
                <Dialog
                    title="Delete Room"
                    modal={true}
                    actions={actions}
                    open={this.props.open}>
                    <TextField floatingLabelText="Search Query" value={this.state.query} onChange={this.onQueryChange}/>
                    <Table onRowSelection={this.handleRowSelection}>
                        <TableHeader displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn>
                                    ID
                                </TableHeaderColumn>
                                <TableHeaderColumn>
                                    Room Name
                                </TableHeaderColumn>
                                <TableHeaderColumn>
                                    Comments
                                </TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.state.rooms.map((room, index) => (
                                <TableRow key={index} selected={this.isSelected(index)}>
                                    <TableRowColumn>{room.id}</TableRowColumn>
                                    <TableRowColumn>{room.roomName}</TableRowColumn>
                                    <TableRowColumn>{room.comments}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Dialog>
            </div>
        )
    }
}

export default RemoveRoom