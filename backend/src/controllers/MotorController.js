const EventEmitter = require('events');
var Gpio = require('pigpio').Gpio;
led1 = new Gpio(19, {mode: Gpio.OUTPUT});
led2 = new Gpio(13, {mode: Gpio.OUTPUT});
led3 = new Gpio(5, {mode: Gpio.OUTPUT});
led4 = new Gpio(12, {mode: Gpio.OUTPUT});
led5 = new Gpio(6, {mode: Gpio.OUTPUT});
in1 = new Gpio(16, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE});
in2 = new Gpio(20, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE});
in3 = new Gpio(21, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE});
in4 = new Gpio(26, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE});

in1.on('interrupt', function (level) {
    console.log('1');
})
in2.on('interrupt', function (level) {
    console.log('2');
})
in3.on('interrupt', function (level) {
    console.log('3');
})
in4.on('interrupt', function (level) {
    console.log('4');
})


class Motor extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('test', {id: 1, url: 'test'});
    }

    forwards() {
        led1.pwmWrite(255);
        led2.pwmWrite(255);
        led3.pwmWrite(255);
        led4.pwmWrite(0);
        led5.pwmWrite(0);
    }

    backwards() {
        led1.pwmWrite(255);
        led2.pwmWrite(0);
        led3.pwmWrite(0);
        led4.pwmWrite(255);
        led5.pwmWrite(255);
    }

    left() {
        led1.pwmWrite(255);
        led2.pwmWrite(0);
        led3.pwmWrite(255);
        led4.pwmWrite(255);
        led5.pwmWrite(0);
    }

    right() {
        led1.pwmWrite(255);
        led2.pwmWrite(255);
        led3.pwmWrite(0);
        led4.pwmWrite(0);
        led5.pwmWrite(255);
    }

    rctl(x0, x1) {
        led1.pwmWrite(255);
        if (x1 > 0) {
            led2.pwmWrite(255 * x1);
            led3.pwmWrite(0);
            led4.pwmWrite(0);
            led5.pwmWrite(255 * x1);
        }
        if (x1 < 0) {
            led2.pwmWrite(0);
            led3.pwmWrite(255 * -x1);
            led4.pwmWrite(255 * -x1);
            led5.pwmWrite(0);
        }
    }

    break() {
        led1.pwmWrite(255);
        led2.pwmWrite(255);
        led3.pwmWrite(255);
        led4.pwmWrite(255);
        led5.pwmWrite(255);
    }
    off() {
        led1.pwmWrite(0);
        led2.pwmWrite(0);
        led3.pwmWrite(0);
        led4.pwmWrite(0);
        led5.pwmWrite(0);
    }
}

module.exports = Motor;