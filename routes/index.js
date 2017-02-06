var express = require('express');
var router = express.Router();


// Home
router.route('/')

  .get(function(req, res, next) {
    data = {
      title: 'Make a plea'
    }
    res.render('index', data);
  });


// Your case
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


// Your details
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


// Your plea
router.route('/your-plea')

  .get(function(req, res, next) {
    data = {
      title: 'Your plea'
    }
    res.render('your-plea/index', data);
  });


// Pay your penalty
router.route('/pay-your-penalty')

  .get(function(req, res, next) {
    data = {
      title: 'Pay your penalty'
    }
    res.render('pay-your-penalty/index', data);
  });


// Your employment
router.route('/your-employment')

  .get(function(req, res, next) {
    data = {
      title: 'Your employment'
    }
    res.render('your-employment/index', data);
  });


// Your finances
router.route('/your-finances')

  .get(function(req, res, next) {
    data = {
      title: 'Your finances'
    }
    res.render('your-finances/index', data);
  });


// Your pension credit
router.route('/your-pension-credit')

  .get(function(req, res, next) {
    data = {
      title: 'Your pension credit'
    }
    res.render('your-pension-credit/index', data);
  });


// Your expenses
router.route('/your-expenses')

  .get(function(req, res, next) {
    data = {
      title: 'Your expenses'
    }
    res.render('your-expenses/index', data);
  });


// Other expenses
router.route('/your-expenses/other-expenses')

  .get(function(req, res, next) {
    data = {
      title: 'Your expenses'
    }
    res.render('your-expenses/other-expenses/index', data);
  });


// Your benefits
router.route('/your-benefits')

  .get(function(req, res, next) {
    data = {
      title: 'Your benefits'
    }
    res.render('your-benefits/index', data);
  });


// Helping you plead online
router.route('/helping-you-plead-online')

  .get(function(req, res, next) {
    data = {
      title: 'Helping you plead online'
    }
    res.render('helping-you-plead-online/index', data);
  });


// Your plea has been submitted
router.route('/your-plea-has-been-submitted')

  .get(function(req, res, next) {
    data = {
      title: 'Your plea has been submitted'
    }
    res.render('your-plea-has-been-submitted/index', data);
  });


module.exports = router
