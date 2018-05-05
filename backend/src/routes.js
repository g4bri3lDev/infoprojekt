const GeneralController = require('./controllers/GeneralController')
const RoomController = require('./controllers/RoomController')

module.exports = (app) => {
    app.get('/online', GeneralController.isOnline)
    app.get('/rooms', RoomController.getRooms)
    app.post('/addRoom', RoomController.addRoom)
}
