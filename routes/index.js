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
  });


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
  });


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

    // Store how do you plead
    var how_do_you_plead = req.session.howDoYouPlead = req.body.howDoYouPlead;

    // Redirect to your employment status
    res.redirect('/your-employment-status');

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
  })
  .post(function(req, res, next) {

    var employment_status = req.session.yourEmploymentStatus;

    if (employment_status === 'Employed') {
      res.redirect('/your-finances/employed');
    } else if (employment_status === 'Employed and also receiving benefits') {
      res.redirect('/your-finances/employed-and-also-receiving-benefits');
    } else {
      // Do nothing...
    }

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

    var employment_status = req.session.yourEmploymentStatus = req.body.yourEmploymentStatus;

    if (employment_status === 'Employed') {
      res.redirect('/your-employer');
    } else if (employment_status === 'Employed and also receiving benefits') {
      res.redirect('/your-employer');
    } else if (employment_status === 'Self employed') {
      res.redirect('/your-finances/self-employed');
    } else if (employment_status === 'Self employed and also receiving benefits') {
      res.redirect('/your-finances/self-employed-and-also-receiving-benefits');
    } else if (employment_status === 'Unemployed') {
      res.redirect('/your-benefits/unemployed');
    } else if (employment_status === 'Unemployed and receiving out of work benefits') {
      res.redirect('/your-benefits/unemployed-and-receiving-out-of-work-benefits');
    } else if (employment_status === 'Other') {
      res.redirect('/your-finances/other');
    } else {
      // Do nothing...
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
  })
  .post(function(req, res, next) {

    var would_paying_a_fine_cause_serious_financial_problems = req.session.wouldPayingAFineCauseSeriousFinancialProblems = req.body.wouldPayingAFineCauseSeriousFinancialProblems;

    if (would_paying_a_fine_cause_serious_financial_problems === 'Yes') {
      res.redirect('/your-expenses');
    } else {
      res.redirect('/check-your-answers/guilty');
    }

  });


// Your finances (employed and also receiving benefits)
router.route('/your-finances/employed-and-also-receiving-benefits')
  .get(function(req, res, next) {
    data = {
      title: 'Your finances',
      phase_banner: true
    }
    res.render('your-finances/employed-and-also-receiving-benefits/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/your-benefits/employed-and-also-receiving-benefits');
  });


// Your finances (self employed)
router.route('/your-finances/self-employed')
  .get(function(req, res, next) {
    data = {
      title: 'Your finances',
      phase_banner: true
    }
    res.render('your-finances/self-employed/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/dependent-children');
  });


// Your finances (self employed and also receiving benefits)
router.route('/your-finances/self-employed-and-also-receiving-benefits')
  .get(function(req, res, next) {
    data = {
      title: 'Your finances',
      phase_banner: true
    }
    res.render('your-finances/self-employed-and-also-receiving-benefits/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/your-benefits/self-employed-and-also-receiving-benefits');
  });


// Your finances (other)
router.route('/your-finances/other')
  .get(function(req, res, next) {
    data = {
      title: 'Your finances',
      phase_banner: true
    }
    res.render('your-finances/other/index', data);
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
  })
  .post(function(req, res, next) {
    res.redirect('/your-expenses/other-expenses');
  });


// Other expenses
router.route('/your-expenses/other-expenses')
  .get(function(req, res, next) {
    data = {
      title: 'Your expenses',
      phase_banner: true
    }
    res.render('your-expenses/other-expenses/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/check-your-answers/guilty');
  });


// Your benefits (unemployed)
router.route('/your-benefits/unemployed')
  .get(function(req, res, next) {
    data = {
      title: 'Your benefits',
      phase_banner: true
    }
    res.render('your-benefits/unemployed/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/dependent-children');
  });


  // Your benefits (employed and also receiving benefits)
  router.route('/your-benefits/employed-and-also-receiving-benefits')
    .get(function(req, res, next) {
      data = {
        title: 'Your benefits',
        phase_banner: true
      }
      res.render('your-benefits/employed-and-also-receiving-benefits/index', data);
    })
    .post(function(req, res, next) {
      res.redirect('/dependent-children');
    });


// Your benefits (unemployed and receiving out of work benefits)
router.route('/your-benefits/unemployed-and-receiving-out-of-work-benefits')
  .get(function(req, res, next) {
    data = {
      title: 'Your benefits',
      phase_banner: true
    }
    res.render('your-benefits/unemployed-and-receiving-out-of-work-benefits/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/dependent-children');
  });


// Your benefits (self-employed and also receiving benefits)
router.route('/your-benefits/self-employed-and-also-receiving-benefits')
  .get(function(req, res, next) {
    data = {
      title: 'Your benefits',
      phase_banner: true
    }
    res.render('your-benefits/self-employed-and-also-receiving-benefits/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/dependent-children');
  });


// Your benefits (other)
router.route('/your-benefits/other')
  .get(function(req, res, next) {
    data = {
      title: 'Your benefits',
      phase_banner: true
    }
    res.render('your-benefits/other/index', data);
  })
  .post(function(req, res, next) {
    res.redirect('/dependent-children');
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
router.route('/your-plea-has-been-submitted/v1')
  .get(function(req, res, next) {
    data = {
      title: 'Your plea has been submitted',
      phase_banner: true
    }
    res.render('your-plea-has-been-submitted/v1/index', data);
  });


router.route('/your-plea-has-been-submitted/v2')
  .get(function(req, res, next) {
    data = {
      title: 'Your plea has been submitted',
      phase_banner: true
    }
    res.render('your-plea-has-been-submitted/v2/index', data);
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
  })
  .post(function(req, res, next) {
    // do something
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


// Thank you
router.route('/thank-you')
  .get(function(req, res, next) {
    data = {
      title: 'Thank you',
      phase_banner: true
    }
    res.render('thank-you', data);
  });


// Thank you
router.route('/pay-court-fine-online')
  .get(function(req, res, next) {
    data = {
      title: 'Pay court fine online',
      phase_banner: true
    }
    res.render('pay-court-fine-online', data);
  });


module.exports = router
