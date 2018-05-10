const EventEmitter = require('events');

class Motor extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('test', {id: 1, url: 'test'});
    }
}

module.exports = Motor;