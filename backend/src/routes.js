const GeneralController = require('./controllers/GeneralController')
const RoomController = require('./controllers/RoomController')
const AudioController = require('./controllers/AudioController')

module.exports = (app) => {
  app.get('/online', GeneralController.isOnline)
  app.get('/rooms', RoomController.getRooms)
  app.post('/addRoom', RoomController.addRoom)
  app.post('/queryRooms', RoomController.queryRooms)
  app.post('/deleteRoom', RoomController.deleteRoom)
  app.get('/playSound', AudioController.playSound)

}
// TODO add Functionality to Routes aswell
