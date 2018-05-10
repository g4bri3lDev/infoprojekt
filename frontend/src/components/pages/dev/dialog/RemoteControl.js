import React, {Component} from 'react'
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import Dialog from "material-ui/Dialog";
import './RemoteControlCSS.css'
import Paper from "material-ui/Paper";

const socketIOClient = require('socket.io-client')('http://' + window.location.hostname + ':8081');
var haveEvents = 'ongamepadconnected' in window;
var controllers = {};

function connecthandler(e) {
    addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
    controllers[gamepad.index] = gamepad;
    requestAnimationFrame(updateStatus);
}

function disconnecthandler(e) {
    removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
    delete controllers[gamepad.index];
}

function updateStatus() {
    if (!haveEvents) {
        scangamepads();
    }
    var x0, x1, x2, x3, x4, x5, x6, x7;
    var b0, b1, b2, b3, b4, b5, b6, b7;
    var controller = controllers[0];
    b0 = controller.buttons[0].value;
    b1 = controller.buttons[1].value;
    b2 = controller.buttons[2].value;
    b3 = controller.buttons[3].value;
    b4 = controller.buttons[4].value;
    b5 = controller.buttons[5].value;
    b6 = controller.buttons[6].value;
    b7 = controller.buttons[7].value;
    x0 = controller.axes[0];
    x1 = controller.axes[1];
    x2 = controller.axes[2];
    x3 = controller.axes[3];
    x4 = controller.axes[4];
    x5 = controller.axes[5];
    x6 = controller.axes[6];
    x7 = controller.axes[7];
    var ret = {
        b0: b0,
        b1: b1,
        b2: b2,
        b3: b3,
        b4: b4,
        b5: b5,
        b6: b6,
        b7: b7,
        x0: x0,
        x1: x1,
        x2: x2,
        x3: x3,
        x4: x4,
        x5: x5,
        x6: x6,
        x7: x7
    };
    return ret;
}

function scangamepads() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
    for (var i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
            if (gamepads[i].index in controllers) {
                controllers[gamepads[i].index] = gamepads[i];
            } else {
                addgamepad(gamepads[i]);
            }
        }
    }
}


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

    handleremote() {
        socketIOClient.emit('rem', updateStatus());
        console.log("wewe");
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
                            <IconButton onMouseDown={() => window.setInterval(this.handleremote, 200)}><FontIcon
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

window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

export default RemoteControl
