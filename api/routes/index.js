var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pityu', function(req, res, next) {
  res.render('index', { nev:'Pityu' });
});

module.exports = router;
