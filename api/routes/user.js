var express = require('express');
var router = express.Router();
const Users = require('../models').Users;
const asyncHandler = require('../middleware/asyncHandler')

/* GET users listing. */
router.post('/users', asyncHandler(async (req, res) => {
  try {
      await Users.create(req.body);
      res.status(201).json({ "message": "Account successfully created!"})
  }catch(error) {
    throw error;
  }
}));

router.post('/users' )

module.exports = router;
