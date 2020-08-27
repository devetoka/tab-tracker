const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

require('./routes')(app)

sequelize.sync().then(
  () => {
    console.log(`Server started on port ${config.port}`)
  }
)
app.listen(config.port)
