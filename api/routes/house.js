'use strict';



var express = require('express');
var router = express.Router();

//Construct Router Insatance
const House = require('../models').House;
const asyncHandler = require('../middleware/asyncHandler')

/* GET home page. */
router.get('/house', asyncHandler(async (req, res) => {
  try{
    const house = await House.findAll({
      attributes: [
        "houseName"
      ]
    })

    if(house){
      res.status(200).json(house);
    } else {
      res.status(404).json({ message: "House not found" });
    }
  }catch(error) {
    throw error;
  }
}));

router.post('/house', asyncHandler(async (req, res) => {

  try{
    const house = await House.create(req.body);

    res.location(`api/house/${house.id}`);
    res.status(201).end();
  }catch(error){
    throw error;
  }
  
}))

module.exports = router;
