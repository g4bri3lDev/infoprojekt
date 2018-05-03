import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

class Modify extends Component {
    render() {
        return (
            <div className="frame">
                <Paper className="paper" zDepth={4}>
                    <h4>Edit</h4>
                    <RaisedButton className="button" label="Add Room" primary={true}/>
                    <RaisedButton className="button" label="Remove Room" primary={true}/>
                    <RaisedButton className="button" label="Add Route" primary={true}/>
                    <RaisedButton className="button" label="Remove Route" primary={true}/>
                </Paper>

            </div>
        )
    }
}

export default Modify