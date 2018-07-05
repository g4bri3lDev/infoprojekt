//Socket Controller 
//Written by Gabriel Lackermeier and Jonas Nieser  
//Comments by Jonas Nieser

const socketio = require('socket.io')
//imports Lidat and Motor controller and creates Lidar and Motor Objects 
const Motor = require('./mcmock');
const Lidar = require('./LidarController');
const motor = new Motor;
const lidar = new Lidar;

//handels the motor emitter, only for debuging 
motor.on('test', (arg) => {
    console.log(arg);
});

module.exports = (server) => {
    //starts the lidar
    lidar.start();
    const io = socketio(server)
    let connections = 0
    io.on('connection', socket => {
        console.log(++connections)
        socket.on('disconnect', () => {
            console.log(--connections)
        })
        //handels the the remot controll socket
        socket.on('mouseDown', (direction) => {
            //TODO if to case
            if (direction == 'back') {
                motor.backwards();
            }
            if (direction == 'up') {
                motor.forwards();
            }
            if (direction == 'left') {
                motor.left();
            }
            if (direction == 'right') {
                motor.right();
            }
            //for debugging only 
            //motor.log('test');
            console.log('MouseDown Received, Direction: ' + direction)
        })
        socket.on('mouseUp', (direction) => {
            motor.break();
            console.log('MouseUp Received, Direction: ' + direction);
        })
        socket.on('rem', (direction) => {
            motor.rctl(direction.x0, direction.x1);
            console.log('MouseUp Received, Direction: ' + direction.x1);
        })
    })

}
