const EventEmitter = require('events');
var Gpio = require('pigpio').Gpio,
    led1 = new Gpio(19, {mode: Gpio.OUTPUT}),
    led2 = new Gpio(13, {mode: Gpio.OUTPUT}),
    led3 = new Gpio(5, {mode: Gpio.OUTPUT}),
    led4 = new Gpio(12, {mode: Gpio.OUTPUT}),
    led5 = new Gpio(6, {mode: Gpio.OUTPUT}),
    in1 = new Gpio(16, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE}),
    in2 = new Gpio(20, {mode: Gpio.INPUT}),
    in3 = new Gpio(21, {mode: Gpio.INPUT}),
    in4 = new Gpio(26, {mode: Gpio.INPUT}),


    in1
.
on('interrupt', function (level) {
    console.log(level);
})


class Motor extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('test', {id: 1, url: 'test'});
        led1.pwmWrite(255);
        led2.pwmWrite(255);
    }
}

module.exports = Motor;