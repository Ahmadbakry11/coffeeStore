const { CoffeePod } = require('../models/coffee_pod'); 
const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const coffeePods = await CoffeePod.find(req.query)
    res.send(coffeePods)
  }
  catch(error){
    res.status(404)
    res.send({ error: error.message })
  }
});

module.exports = router; 