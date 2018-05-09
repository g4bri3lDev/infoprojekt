const socketio = require('socket.io')

module.exports = (server) => {
    const io = socketio(server)
    let connections = 0
    io.on('connection', socket => {
        console.log(++connections)

        socket.on('disconnect', () => {
            console.log(--connections)
        })
        socket.on('mouseDown', (direction) => {
            console.log('MouseDown Received, Direction: ' + direction)
        })
        socket.on('mouseUp', (direction) => {
            console.log('MouseUp Received, Direction: ' + direction)
        })
    })

}