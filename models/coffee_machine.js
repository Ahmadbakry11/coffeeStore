const mongoose = require('mongoose') 

const CoffeeMachine = mongoose.model('CoffeeMachine', new mongoose.Schema({
  product_type: { 
    type: String, 
    required: true 
  },
  water_line_compatible: { 
    type: Boolean, 
    required: true 
  }
}, { collection: 'coffeeMachines' })) 

exports.CoffeeMachine = CoffeeMachine  
