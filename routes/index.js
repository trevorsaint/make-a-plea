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

    var errors = true;
    var caseOrUniqueReferenceNumber = req.body.caseOrUniqueReferenceNumber;
    var postcodeAsShownOnYourNotice = req.body.postcodeAsShownOnYourNotice;

    if (caseOrUniqueReferenceNumber && postcodeAsShownOnYourNotice) {

      errors = false

      res.render('your-details/index', data);

    } else {

      errors = true

      res.render('your-case/index', {
        title: 'Your case',
        errors: errors,
        caseOrUniqueReferenceNumber: caseOrUniqueReferenceNumber,
        postcodeAsShownOnYourNotice: postcodeAsShownOnYourNotice
      });

    }

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


module.exports = router
