var express = require('express');
var router = express.Router();


// Home
router.route('/')

  .get(function(req, res, next) {
    data = {
      title: 'Make a plea for an offence',
      phase_banner: false
    }
    res.render('index', data);
  });


// Your case
router.route('/your-case')

  .get(function(req, res, next) {
    data = {
      title: 'Your case',
      phase_banner: true
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
      title: 'Your details',
      phase_banner: true
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
      title: 'Your plea',
      phase_banner: true
    }
    res.render('your-plea/index', data);
  })

  .post(function(req, res, next) {

    var how_do_you_plead = req.body.howDoYouPlead;

    if (how_do_you_plead === 'Guilty') {
      res.redirect('/check-your-answers/guilty');
    } else {
      res.redirect('/check-your-answers/not-guilty');
    }

  });


// Pay your penalty
router.route('/pay-your-penalty')

  .get(function(req, res, next) {
    data = {
      title: 'Pay your penalty',
      phase_banner: true
    }
    res.render('pay-your-penalty/index', data);
  });


// Your employer
router.route('/your-employer')

  .get(function(req, res, next) {
    data = {
      title: 'Your employer',
      phase_banner: true
    }
    res.render('your-employer/index', data);
  });


// Your employment status
router.route('/your-employment-status')

  .get(function(req, res, next) {
    data = {
      title: 'Your employment status',
      phase_banner: true
    }
    res.render('your-employment-status/index', data);
  })

  .post(function(req, res, next) {

    var employment_status = req.body.yourEmploymentStatus;

    if (employment_status === 'Employed') {
      res.redirect('/your-finances/employed');
    } else if (employment_status === 'Employed and also receiving benefits') {
      res.redirect('/your-finances/employed-and-also-receiving-benefits');
    } else if (employment_status === 'Self employed') {
      res.redirect('/your-finances/self-employed');
    } else if (employment_status === 'Self employed and also receiving benefits') {
      res.redirect('/your-finances/self-employed-and-also-receiving-benefits');
    } else {
      // do something else...
      res.send('Something else was selected, redirect elsewhere...');
    }

  });


// Your finances (employed)
router.route('/your-finances/employed')

  .get(function(req, res, next) {
    data = {
      title: 'Your finances',
      phase_banner: true
    }
    res.render('your-finances/employed/index', data);
  });


// Your finances (employed and also receiving benefits)
router.route('/your-finances/employed-and-also-receiving-benefits')

  .get(function(req, res, next) {
    data = {
      title: 'Your finances',
      phase_banner: true
    }
    res.render('your-finances/employed-and-also-receiving-benefits/index', data);
  });


// Your finances (self employed)
router.route('/your-finances/self-employed')

  .get(function(req, res, next) {
    data = {
      title: 'Your finances',
      phase_banner: true
    }
    res.render('your-finances/self-employed/index', data);
  });


// Your finances (self employed and also receiving benefits)
router.route('/your-finances/self-employed-and-also-receiving-benefits')

  .get(function(req, res, next) {
    data = {
      title: 'Your finances',
      phase_banner: true
    }
    res.render('your-finances/self-employed-and-also-receiving-benefits/index', data);
  });




// Your pension credit
router.route('/your-pension-credit')

  .get(function(req, res, next) {
    data = {
      title: 'Your pension credit',
      phase_banner: true
    }
    res.render('your-pension-credit/index', data);
  });


// Your expenses
router.route('/your-expenses')

  .get(function(req, res, next) {
    data = {
      title: 'Your expenses',
      phase_banner: true
    }
    res.render('your-expenses/index', data);
  });


// Other expenses
router.route('/your-expenses/other-expenses')

  .get(function(req, res, next) {
    data = {
      title: 'Your expenses',
      phase_banner: true
    }
    res.render('your-expenses/other-expenses/index', data);
  });


// Your benefits
router.route('/your-benefits')

  .get(function(req, res, next) {
    data = {
      title: 'Your benefits',
      phase_banner: true
    }
    res.render('your-benefits/index', data);
  });


// Helping you plead online
router.route('/helping-you-plead-online')

  .get(function(req, res, next) {
    data = {
      title: 'Helping you plead online',
      phase_banner: true
    }
    res.render('helping-you-plead-online/index', data);
  });


// Your plea has been submitted
router.route('/your-plea-has-been-submitted')

  .get(function(req, res, next) {
    data = {
      title: 'Your plea has been submitted',
      phase_banner: true
    }
    res.render('your-plea-has-been-submitted/index', data);
  });


// Check your answers (guilty)
router.route('/check-your-answers/guilty')

  .get(function(req, res, next) {
    data = {
      title: 'Check your answers',
      phase_banner: true
    }
    res.render('check-your-answers/guilty/', data);
  });


// Check your answers (not guilty)
router.route('/check-your-answers/not-guilty')

  .get(function(req, res, next) {
    data = {
      title: 'Check your answers',
      phase_banner: true
    }
    res.render('check-your-answers/not-guilty/', data);
  });


// Dependent children
router.route('/dependent-children')

  .get(function(req, res, next) {
    data = {
      title: 'Dependent children',
      phase_banner: true
    }
    res.render('dependent-children/', data);
  });


// Declaration
router.route('/declaration')

  .get(function(req, res, next) {
    data = {
      title: 'Declaration',
      phase_banner: true
    }
    res.render('declaration/index', data);
  })

  .post(function(req, res, next) {
    res.redirect('/your-plea-has-been-submitted');
  });


module.exports = router
