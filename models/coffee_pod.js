const mongoose = require('mongoose') 

const CoffeePod = mongoose.model('CoffeePod', new mongoose.Schema({
  product_type: {
    type: String, 
    required: true
  },
  pack_size: {
    type: Number, 
    required: true
  },
  coffee_flavor: {
    type: String, 
    required: true
  }
}, { collection: 'coffeePods' })) 

exports.CoffeePod = CoffeePod  