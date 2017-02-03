var express = require('express');
var router = express.Router();


// home
router.route('/')

  .get(function(req, res, next) {
    data = {
      title: 'Make a plea'
    }
    res.render('index', data);
  });


// your case
router.route('/your-case')

  .get(function(req, res, next) {
    data = {
      title: 'Your case'
    }
    res.render('your-case/index', data);
  })

  .post(function(req, res, next) {
    res.redirect('/your-details');
  })


// your details
router.route('/your-details')

  .get(function(req, res, next) {
    data = {
      title: 'Your details'
    }
    res.render('your-details/index', data);
  })

  .post(function(req, res, next) {
    res.redirect('/your-plea');
  })


// your plea
router.route('/your-plea')

  .get(function(req, res, next) {
    data = {
      title: 'Your plea'
    }
    res.render('your-plea/index', data);
  });


  // your plea
  router.route('/pay-your-penalty')

    .get(function(req, res, next) {
      data = {
        title: 'Pay your penalty'
      }
      res.render('pay-your-penalty/index', data);
    });


module.exports = router
