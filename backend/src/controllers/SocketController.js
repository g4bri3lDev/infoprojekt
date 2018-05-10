const socketio = require('socket.io')
const Motor = require('./MotorController');
const motor = new Motor;

motor.on('test', (arg) => {
    console.log(arg);
});

module.exports = (server) => {
    const io = socketio(server)
    let connections = 0
    io.on('connection', socket => {
        console.log(++connections)

        socket.on('disconnect', () => {
            console.log(--connections)
        })
        socket.on('mouseDown', (direction) => {
            if (direction == 'back') {
                motor.backwards();
            }
            if (direction == 'up') {
                motor.forwards();
            }
            //motor.log('test');
            console.log('MouseDown Received, Direction: ' + direction)
        })
        socket.on('mouseUp', (direction) => {
            motor.break();
            console.log('MouseUp Received, Direction: ' + direction)
        })
    })

}