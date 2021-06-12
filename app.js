const debug = require('debug')('app:start')
const debugDb = require('debug')('app:db')

const express = require('express') 

const connectDB = require('./config/db_config')

const coffeeMachinesRouter = require('./routes/coffee_machines') 
const coffeePodsRouter = require('./routes/coffee_pods') 

const app = express() 

connectDB()

app.use(express.json()) 

app.use('/api/coffee-machines', coffeeMachinesRouter) 
app.use('/api/coffee-pods', coffeePodsRouter) 

app.use(function (req, res, next) {
  res.status(404).send({error: "Not found"})
})

const port = process.env.PORT || 3000 

app.listen(port, () => debug('Listening on port ...', port)) 