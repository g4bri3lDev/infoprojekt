import React, {Component} from 'react'
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";

class AddRoom extends Component {
    onNameChange = (event) => {
        this.setState({roomName: event.target.value, disabled: event.target.value === ''})
    }
    onStairsChange = (event) => {
        this.setState({isStairs: !this.state.isStairs})
    }
    close = () => {
        this.reset()
        // noinspection JSUnresolvedFunction
        this.props.trigger()
    }
    submit = () => {
        this.reset()

        fetch('/addRoom', {
            body: JSON.stringify({
                roomName: this.state.roomName,
                isStairs: this.state.isStairs,
                comments: this.state.comments
            }),
            headers: {'content-type': 'application/json'},
            mode: 'cors',
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok === 'ok') {
                    // noinspection JSUnresolvedFunction
                    this.props.trigger()
                }
            })
    }
    onCommentsChange = (event) => {
        this.setState({comments: event.target.value})
    }
    reset = () => {
        this.setState({
            roomName: '',
            isStairs: false,
            comments: ''
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            roomName: '',
            isStairs: false,
            comments: '',
            disabled: true
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.close}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={this.state.disabled}
                onClick={this.submit}
            />,
        ]
        return (
            <div>
                <Dialog
                    title="Add Room"
                    modal={true}
                    actions={actions}
                    open={this.props.open}>
                    <TextField floatingLabelText="Room Name *Required" value={this.state.roomName}
                               onChange={this.onNameChange}/>
                    <Toggle label="Is Stairs" toggled={this.state.isStairs} onToggle={this.onStairsChange}/>
                    <TextField floatingLabelText="Comments" value={this.state.comments} onChange={this.onCommentsChange}
                               multiLine={true} rows={3} rowsMax={5}/>
                </Dialog>

            </div>
        )
    }

}

export default AddRoom