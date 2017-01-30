var express = require('express');
var router = express.Router();

// routes
router.all('/', function(req, res) {

  data = {
    title: 'Home'
  }

  res.render('index', data);

});

module.exports = router
