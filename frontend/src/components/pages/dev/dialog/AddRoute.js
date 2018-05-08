import React, {Component} from 'react'
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";

class AddRoute extends Component {

    render() {
        return(
            <div>
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
            </div>
        )
    }
}

export default AddRoute