var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/house', function(req, res, next) {
  // Dont use this beacuse render is for rendering static page 
  //res.render('index', { nev:'Pityu' });
  res.json({ housename: 'Pityu house', houseQuanty: 15, housewoods: 'A ton' })
});

module.exports = router;
