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