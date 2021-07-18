var express = require('express');
var router = express.Router();
const { authenticateUser } = require("../middleware/auth-user");
const Users = require('../models').Users;
const asyncHandler = require('../middleware/asyncHandler')

/* GET users listing. */
router.post('/users', asyncHandler(async (req, res) => {
  try {
      await Users.create(req.body);
      res.status(201).json({ "message": "Account successfully created!"})
  }catch(error) {
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      const errors = error.errors.map(err => err.message);
      res.status(400).json({ errors });   
    } else {
      throw error;
    }
  }
}));

/***
 * return the currently authenticated user along with a 200 HTTP status code
 */
 router.get('/users', authenticateUser, asyncHandler(async (req, res) => {
  const user = req.currentUser;
  
//  console.log(user);
  res.status(200).json({
    id: user.id,
    userName: user.userName,
    email: user.email,
    password: user.password
  })
}));

module.exports = router;
