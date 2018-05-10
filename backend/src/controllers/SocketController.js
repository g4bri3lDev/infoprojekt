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
            //motor.log('test');
            motor.on();
            console.log('MouseDown Received, Direction: ' + direction)
        })
        socket.on('mouseUp', (direction) => {
            if (direction.equals('back')) {
                motor.off();
            }
            console.log('MouseUp Received, Direction: ' + direction)
        })
    })

}