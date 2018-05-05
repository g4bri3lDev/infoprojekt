import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from "material-ui/FontIcon";
import AddRoom from "./dialog/AddRoom";

class Modify extends Component {
    handleAddRoom = () => this.setState({openAddRoom: !this.state.openAddRoom})

    constructor(props) {
        super(props);
        this.state = {
            openAddRoom: false
        }
    }

    render() {
        return (
            <div className="frame">
                <Paper className="paper" zDepth={4}>
                    <h4><FontIcon className="material-icons">create</FontIcon>Edit</h4>
                    <RaisedButton className="button" label="Add Room" primary={true} onClick={this.handleAddRoom}/>
                    <AddRoom trigger={this.handleAddRoom} open={this.state.openAddRoom}/>
                    <RaisedButton className="button" label="Remove Room" primary={true}/>
                    <RaisedButton className="button" label="Add Route" primary={true}/>
                    <RaisedButton className="button" label="Remove Route" primary={true}/>
                </Paper>

            </div>
        )
    }
}

export default Modify