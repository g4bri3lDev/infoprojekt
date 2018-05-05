import React, {Component} from 'react'
import Paper from "material-ui/Paper";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table'

class Roomtable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomList: []
        }
    }

    render() {
        return (
            <div className="frame">
                <Paper className="paper">
                    <h4>Rooms</h4>
                    <Table allRowsSelected={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn>
                                    ID
                                </TableHeaderColumn>
                                <TableHeaderColumn>
                                    Room Name
                                </TableHeaderColumn>
                                <TableHeaderColumn>
                                    Stairs
                                </TableHeaderColumn>
                                <TableHeaderColumn>
                                    Comments
                                </TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {this.state.roomList.map((room, index) => (
                                <TableRow key={index}>
                                    <TableRowColumn>{room.id}</TableRowColumn>
                                    <TableRowColumn>{room.roomName}</TableRowColumn>
                                    <TableRowColumn>{room.isStairs.toString()}</TableRowColumn>
                                    <TableRowColumn>{room.comments}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>

            </div>
        )
    }

    componentDidMount() {
        fetch('/rooms')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    roomList: data
                })
            })
    }
}

export default Roomtable