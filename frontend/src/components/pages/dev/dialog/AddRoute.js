import React, {Component} from 'react'
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";

class AddRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        }
    }


    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
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
                <Dialog title="Add Route"
                        modal={true}
                        actions={actions}
                        open={this.props.open}>
                    <TextField/>
                </Dialog>
            </div>
        )
    }
}

export default AddRoute