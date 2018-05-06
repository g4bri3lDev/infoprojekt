import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from "material-ui/FontIcon";
import AddRoom from "./dialog/AddRoom";
import RemoveRoom from "./dialog/RemoveRoom";

class Modify extends Component {
    handleAddRoom = () => this.setState({openAddRoom: !this.state.openAddRoom})
    handleRemoveRoom = () => this.setState({openRemoveRoom: !this.state.openRemoveRoom})

    constructor(props) {
        super(props);
        this.state = {
            openAddRoom: false,
            openRemoveRoom: false
        }
    }

    render() {
        return (
            <div className="frame">
                <Paper className="paper" zDepth={4}>
                    <h4><FontIcon className="material-icons">create</FontIcon>Edit</h4>
                    <RaisedButton className="button" label="Add Room" primary={true} onClick={this.handleAddRoom}/>
                    <RaisedButton className="button" label="Remove Room" primary={true}
                                  onClick={this.handleRemoveRoom}/>
                    <RaisedButton className="button" label="Add Route" primary={true}/>
                    <RaisedButton className="button" label="Remove Route" primary={true}/>
                </Paper>
                <AddRoom trigger={this.handleAddRoom} open={this.state.openAddRoom}/>
                <RemoveRoom trigger={this.handleRemoveRoom} open={this.state.openRemoveRoom}/>
            </div>
        )
    }
}

export default Modify