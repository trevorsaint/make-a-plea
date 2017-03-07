var express = require('express');
var router = express.Router();


// RELEASE 1


// Home
router.route('/')
  .get(function(req, res, next) {
    data = {
      title: 'Make a plea for an offence',
      phase_banner: false
    }
    res.render('index', data);
  })
  .post(function(req, res, next) {

    var who_sent_your_notice = req.session.whoSentYouANotice = req.body.whoSentYouANotice;

    if (who_sent_your_notice === 'The police') {
      res.redirect('https://www.makeaplea.service.gov.uk/plea/enter_urn');
    } else if (who_sent_your_notice === 'Transport for London') {
      res.redirect('/find-your-case');
    } else {
      // validate
    }

  });


// Find your case
router.route('/find-your-case')
  .get(function(req, res, next) {
    data = {
      title: 'Find your case',
      phase_banner: true,
      back_link: '/'
    }
    res.render('find-your-case/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/your-details');
  });


// Your details
router.route('/your-details')
  .get(function(req, res, next) {
    data = {
      title: 'Your details',
      phase_banner: true,
      back_link: '/find-your-case'
    }
    res.render('your-details/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/your-plea');
  });


// Your plea
router.route('/your-plea')
  .get(function(req, res, next) {
    data = {
      title: 'Your plea',
      phase_banner: true,
      back_link: '/your-details'
    }
    res.render('your-plea/index', data);
  })
  .post(function(req, res, next) {

    // Store how do you plead
    var how_do_you_plead = req.session.howDoYouPlead = req.body.howDoYouPlead;

    // Redirect to your finances
    res.redirect('/your-finances');

  });


// Your finances
router.route('/your-finances')
  .get(function(req, res, next) {
    data = {
      title: 'Your finances',
      phase_banner: true,
      back_link: '/your-plea'
    }
    res.render('your-finances/index', data);
  })
  .post(function(req, res, next) {
    // do something
  });


// Your employment
router.route('/your-employment')
  .get(function(req, res, next) {
    data = {
      title: 'Your employment',
      phase_banner: true,
      back_link: '/your-finances'
    }
    res.render('your-employment/index', data);
  })
  .post(function(req, res, next) {

    // Store your employment
    var are_you_employed = req.session.areYouEmployed = req.body.areYouEmployed;

    if (are_you_employed === 'Yes') {
      res.redirect('/your-employer');
    } else {
      res.redirect('/benefits-and-state-pension');
    }

  });


// Your employer
router.route('/your-employer')
  .get(function(req, res, next) {
    data = {
      title: 'Your employer',
      phase_banner: true,
      back_link: '/your-employment'
    }
    res.render('your-employer/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/benefits-and-state-pension');
  });


// Benefits and state pension
router.route('/benefits-and-state-pension')

  .get(function(req, res, next) {

    // redirection based on employment
    if (req.session.areYouEmployed === 'Yes') {
      var back_link = '/your-employer'
    } else {
      var back_link = '/your-employment'
    }

    data = {
      title: 'Benefits and State Pension',
      phase_banner: true,
      back_link: back_link
    }

    res.render('benefits-and-state-pension/index', data);

  })
  .post(function(req, res, next) {
    res.redirect('/your-savings');
  });


// Your savings
router.route('/your-savings')
  .get(function(req, res, next) {
    data = {
      title: 'Your savings',
      phase_banner: true,
      back_link: '/benefits-and-state-pension'
    }
    res.render('your-savings/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/your-outgoings');
  });


// Your outgoings
router.route('/your-outgoings')
  .get(function(req, res, next) {
    data = {
      title: 'Your outgoings',
      phase_banner: true,
      back_link: '/your-savings'
    }
    res.render('your-outgoings/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/dependent-children');
  });


// Dependent children
router.route('/dependent-children')
  .get(function(req, res, next) {
    data = {
      title: 'Dependent children',
      phase_banner: true
    }
    res.render('dependent-children/', data);
  })
  .post(function(req, res, next) {
    res.redirect('/check-your-answers');
  });


// Check your answers (not guilty)
router.route('/check-your-answers')
  .get(function(req, res, next) {
    data = {
      title: 'Check your answers',
      phase_banner: true
    }
    res.render('check-your-answers/', data);
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


// Your plea has been submitted
router.route('/your-plea-has-been-submitted/')
  .get(function(req, res, next) {
    data = {
      title: 'Your plea has been submitted',
      phase_banner: true
    }
    res.render('your-plea-has-been-submitted/index', data);
  });


// Thank you
router.route('/thank-you')
  .get(function(req, res, next) {
    data = {
      title: 'Thank you',
      phase_banner: true
    }
    res.render('thank-you', data);
  })
  .post(function(req, res, next) {
    res.redirect('/');
  });


// Help and advice
router.route('/help-and-advice')
  .get(function(req, res, next) {
    data = {
      title: 'Help and advice',
      phase_banner: true
    }
    res.render('help-and-advice/index', data);
  });


// Legal advice and help
router.route('/legal-advice-and-help')
  .get(function(req, res, next) {
    data = {
      title: 'Legal advice and help',
      phase_banner: true
    }
    res.render('legal-advice-and-help/index', data);
  });


// Legal advice and help
router.route('/help-with-the-court-process')
  .get(function(req, res, next) {
    data = {
      title: 'Help with the court process',
      phase_banner: true
    }
    res.render('help-with-the-court-process/index', data);
  });


module.exports = router
