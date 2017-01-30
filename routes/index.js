var express = require('express');
var router = express.Router();


// locals
app.locals = {
  baseurl: '/',
  apptitle: 'Make a plea'
}


// routes
router.all('/', function(req, res) {

  data = {
    title: 'Home'
  }

  res.render('index', data);

});

module.exports = router
