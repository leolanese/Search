var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Search for houses and flats for sale across the UK' 
  });
});

module.exports = router;
