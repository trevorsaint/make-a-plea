var express = require('express');
var router = express.Router();


// home
router.route('/')

  .get(function(req, res) {
    data = {
      title: 'Make a plea'
    }
    res.render('index', data);
  });


// your case
router.route('/your-case')

  .get(function(req, res) {
    data = {
      title: 'Your case'
    }
    res.render('your-case/index', data);
  })

  .post(function(req, res) {
    res.redirect('/your-details');
  });


// your details
router.route('/your-details')

  .get(function(req, res) {
    data = {
      title: 'Your details'
    }
    res.render('your-details/index', data);
  })

  .post(function(req, res) {
    res.redirect('/your-plea');
  })


// your plea
router.route('/your-plea')

  .get(function(req, res) {
    data = {
      title: 'Your plea'
    }
    res.render('your-plea/index', data);
  });


module.exports = router
