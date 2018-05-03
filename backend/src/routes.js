const GeneralController = require('./controllers/GeneralController')

module.exports = (app) => {
    app.get('/online', GeneralController.isOnline)
}
