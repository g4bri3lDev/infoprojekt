//Motor Mock 
//written by Jonas Niesner
//This file is used to replace the Motor controller for programming on devices other than the target device to replace the IO calls with console logs
//more information about this can be found in the real Motor Controller
const EventEmitter = require('events');

class Motor extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('test', {id: 1, url: 'test'});
    }

    forwards() {
        console.log("forwards");
    }

    backwards() {
        console.log("backwards");
    }

    left() {
        console.log("left");
    }

    right() {
        console.log("right");
    }

    rctl(x0, x1) {
        console.log("rctl");
    }

    break() {
        console.log("break");
    }
    off() {
        console.log("off");
    }
}

module.exports = Motor;
