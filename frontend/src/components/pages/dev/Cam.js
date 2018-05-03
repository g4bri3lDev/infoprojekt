import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'

class Dev extends Component {

    render() {
        return (
            <div className="frame">
                <Paper className="paper" zDepth={4}>
                    <h4><FontIcon className="material-icons">videocam</FontIcon>Live Camera Feed</h4>
                    <img src="http://192.168.4.1:8090/?action=stream" alt="Cam Stream failed to load"/>
                </Paper>
            </div>
        )
    }
}

export default Dev