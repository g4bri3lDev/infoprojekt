import React, {Component} from 'react'
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import Dialog from "material-ui/Dialog";
import './RemoteControlCSS.css'
import Paper from "material-ui/Paper";

const socketIOClient = require('socket.io-client')('http://' + window.location.hostname + ':8081');

class RemoteControl extends Component {
    handleOpenRemote = () => {
        this.setState({openRemoteControl: !this.state.openRemoteControl})
    }

    constructor(props) {
        super(props);
        this.state = {
            openRemoteControl: false,
            clients: 0
            //TODO write Config file
        }
    }

    handleMouseDown(direction) {
        socketIOClient.emit('mouseDown', direction)
    }

    handleMouseUp(direction) {
        socketIOClient.emit('mouseUp', direction)
    }

    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleOpenRemote}
            />
        ]
        return (
            <div className="frame">
                <Paper className="paper">
                    <FlatButton
                        label="Open Remote"
                        primary={true}
                        onClick={this.handleOpenRemote}/>
                    <Dialog
                        title="Remote Control"
                        modal={false}
                        actions={actions}
                        open={this.state.openRemoteControl}>
                        <div className="btns">
                            <IconButton onMouseDown={() => this.handleMouseDown('up')}
                                        onMouseUp={() => this.handleMouseUp('up')}><FontIcon
                                className="material-icons">arrow_upward</FontIcon></IconButton>
                        </div>
                        <div className="btns">
                            <IconButton onMouseDown={() => this.handleMouseDown('left')}
                                        onMouseUp={() => this.handleMouseUp('left')}><FontIcon
                                className="material-icons">arrow_back</FontIcon></IconButton>
                            <IconButton><FontIcon
                                className="material-icons">album</FontIcon></IconButton>
                            <IconButton onMouseDown={() => this.handleMouseDown('right')}
                                        onMouseUp={() => this.handleMouseUp('right')}><FontIcon
                                className="material-icons">arrow_forward</FontIcon></IconButton>
                        </div>
                        <div className="btns">
                            <IconButton onMouseDown={() => this.handleMouseDown('back')}
                                        onMouseUp={() => this.handleMouseUp('back')}><FontIcon
                                className="material-icons">arrow_downward</FontIcon></IconButton>

                        </div>
                    </Dialog>
                </Paper>
            </div>
        )
    }
}

export default RemoteControl
