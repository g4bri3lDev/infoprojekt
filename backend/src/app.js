const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')


const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
require('./routes')(app)
let server = require('http').createServer(app)
require('./controllers/SocketController')(server)

sequelize.sync()
  .then(() => {
    server.listen(config.port)
    console.log(`Backend started on Port ${config.port}`)
  })
