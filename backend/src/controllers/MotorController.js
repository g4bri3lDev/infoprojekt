//Motor and IO Controller
//written by Jonas Niesner
//aditional Information about the motor controller can be found in the TB6612FNG Datasheet

//importing the Pi IO Lib 
const EventEmitter = require('events');
//Opening the IO PORT
let Gpio = require('pigpio').Gpio;

//controles the motor speed for the simple motor controlls, 8 bit value(0 = off 255= 100% duty cicle)
var speed = 255;

//IO defenition
//Outputs for motor controll
STBY = new Gpio(19, {mode: Gpio.OUTPUT});
AIN1 = new Gpio(13, {mode: Gpio.OUTPUT});
AIN2 = new Gpio(5, {mode: Gpio.OUTPUT});
BIN1 = new Gpio(12, {mode: Gpio.OUTPUT});
BIN2 = new Gpio(6, {mode: Gpio.OUTPUT});

//Inputs for the magnetic encoders
in1 = new Gpio(16, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE});
in2 = new Gpio(20, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE});
in3 = new Gpio(21, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE});
in4 = new Gpio(26, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE});

//just a debuging function, this would need to be implemented if a position feedback is required
in1.on('interrupt', function (level) {
    console.log('enc MA 1');
})
in2.on('interrupt', function (level) {
    console.log('enc MA 2');
})
in3.on('interrupt', function (level) {
    console.log('enc MB 1');
})
in4.on('interrupt', function (level) {
    console.log('enc MA 2');
})


class Motor extends EventEmitter {
    
    //emitter test code, only used for debuging
    log(message) {
        console.log(message);
        this.emit('test', {id: 1, url: 'test'});
    }

    //simple motor console (forwards,reverse,left,right)
    forwards() {
        STBY.pwmWrite(speed);
        AIN1.pwmWrite(0);
        AIN2.pwmWrite(0);
        BIN1.pwmWrite(speed);
        BIN2.pwmWrite(speed);
    }
    backwards() {
        STBY.pwmWrite(speed);
        AIN1.pwmWrite(speed);
        AIN2.pwmWrite(speed);
        BIN1.pwmWrite(0);
        BIN2.pwmWrite(0);
    }
    left() {
        STBY.pwmWrite(speed);
        AIN1.pwmWrite(speed);
        AIN2.pwmWrite(0);
        BIN1.pwmWrite(0);
        BIN2.pwmWrite(speed);
    }
    right() {
        STBY.pwmWrite(speed);
        AIN1.pwmWrite(0);
        AIN2.pwmWrite(speed);
        BIN1.pwmWrite(speed);
        BIN2.pwmWrite(0);
    }
    
    //used if a remote controll is connected over the socket 
    rctl(x0, x1) {
        STBY.pwmWrite(255);
        console.log(parseInt(255 * x1));
        console.log(parseInt(255 * -x1));
        console.log(x1);
        //converts the x and y values of the joystick to motor pwm values 
        if (x1 > 0) {
            if (x0 > 0) {
                AIN1.pwmWrite(Math.abs(parseInt(255 * x1 - Math.abs(parseInt(255 * x0)))));
                AIN2.pwmWrite(Math.abs(parseInt(255 * x1)));
            }
            else {
                AIN1.pwmWrite(Math.abs(parseInt(255 * x1)));
                AIN2.pwmWrite(Math.abs(parseInt(255 * x1 - Math.abs(parseInt(255 * x0)))));
            }
            BIN1.pwmWrite(0);
            BIN2.pwmWrite(0);

        }
        if (x1 < 0) {
            AIN1.pwmWrite(0);
            AIN2.pwmWrite(0);
            if (x0 > 0) {
                BIN1.pwmWrite(Math.abs(parseInt(255 * -x1 - Math.abs(parseInt(255 * x0)))));
                BIN2.pwmWrite(Math.abs(parseInt(255 * -x1)));
            }
            else {
                BIN1.pwmWrite(Math.abs(parseInt(255 * -x1)));
                BIN2.pwmWrite(Math.abs(parseInt(255 * -x1 - Math.abs(parseInt(255 * x0)))));
            }
        }
        if (x1 == 0) {
            this.break();
        }
    }
    
    //shorts out the Motors to brake faster
    break() {
        STBY.pwmWrite(255);
        AIN1.pwmWrite(255);
        AIN2.pwmWrite(255);
        BIN1.pwmWrite(255);
        BIN2.pwmWrite(255);
    }
    
    //puts the motor controller into sleep Mode
    off() {
        STBY.pwmWrite(0);
        AIN1.pwmWrite(0);
        AIN2.pwmWrite(0);
        BIN1.pwmWrite(0);
        BIN2.pwmWrite(0);
    }
}

module.exports = Motor;
