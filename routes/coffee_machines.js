const { CoffeeMachine } = require('../models/coffee_machine'); 
const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try{
      const coffeeMachines = await CoffeeMachine.find(req.query)
    res.send(coffeeMachines)
  }
  catch{
    res.status(404)
    res.send({ error: "Coffee machines not found" })
  }
});

module.exports = router; 