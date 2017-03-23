var express = require("express");
var router = express.Router();


// RELEASE 1
// =========


// landing
router.route("/")
  .get(function(req, res, next) {
    data = {
      title: "Make a plea for an offence",
      phase_banner: false
    }
    res.render("index", data);
  })
  .post(function(req, res, next) {

    sent_notice = req.session.sentNotice = req.body.sentNotice;

    if (sent_notice === "The police") {
      res.redirect("https://www.makeaplea.service.gov.uk/plea/enter_urn");
    } else if (sent_notice === "Transport for London") {
      res.redirect("/find-your-case");
    }

  });


// find your case
router.route("/find-your-case")
  .get(function(req, res, next) {
    data = {
      title: "Find your case",
      phase_banner: true,
      back_link: "/"
    }
    res.render("find-your-case/index", data);
  })
  .post(function(req, res, next) {
    res.redirect("/your-details");
  });


// your details
router.route("/your-details")
  .get(function(req, res, next) {
    data = {
      title: "Your details",
      phase_banner: true,
      back_link: "/find-your-case"
    }
    res.render("your-details/index", data);
  })
  .post(function(req, res, next) {
    res.redirect("/your-plea");
  });


// your plea
router.route("/your-plea")
  .get(function(req, res, next) {
    data = {
      title: "Your plea",
      phase_banner: true,
      back_link: "/your-details"
    }
    res.render("your-plea/index", data);
  })
  .post(function(req, res, next) {

    var how_do_you_plead = req.session.howDoYouPlead = req.body.howDoYouPlead;

    if (how_do_you_plead === "Guilty") {
      res.redirect("/your-finances");
    } else {
      res.redirect("/check-your-answers");
    }

  });


// your finances
router.route("/your-finances")
  .get(function(req, res, next) {
    data = {
      title: "Your finances",
      phase_banner: true,
      back_link: "/your-plea"
    }
    res.render("your-finances/index", data);
  })
  .post(function(req, res, next) {
    // do something
  });


// your employment
router.route("/employment")
  .get(function(req, res, next) {
    data = {
      title: "Employment",
      phase_banner: true,
      back_link: "/your-finances"
    }
    res.render("employment/index", data);
  })
  .post(function(req, res, next) {

    are_you_employed = req.session.areYouEmployed = req.body.areYouEmployed;

    if (are_you_employed === "Yes") {
      res.redirect("/your-employer");
    } else {
      res.redirect("/benefits-and-state-pension");
    }

  });


// your employer
router.route("/your-employer")
  .get(function(req, res, next) {
    data = {
      title: "Your employer",
      phase_banner: true,
      back_link: "/employment"
    }
    res.render("your-employer/index", data);
  })
  .post(function(req, res, next) {
    res.redirect("/benefits-and-state-pension");
  });


// benefits and state pension
router.route("/benefits-and-state-pension")
  .get(function(req, res, next) {

    if (req.session.areYouEmployed === "Yes") {
      var back_link = "/your-employer"
    } else {
      var back_link = "/employment"
    }

    data = {
      title: "Benefits and State Pension",
      phase_banner: true,
      back_link: back_link
    }

    res.render("benefits-and-state-pension/index", data);

  })
  .post(function(req, res, next) {
    res.redirect("/your-savings");
  });


// your savings
router.route("/your-savings")
  .get(function(req, res, next) {
    data = {
      title: "Your savings",
      phase_banner: true,
      back_link: "/benefits-and-state-pension"
    }
    res.render("your-savings/index", data);
  })
  .post(function(req, res, next) {
    res.redirect("/your-outgoings");
  });


// your outgoings
router.route("/your-outgoings")
  .get(function(req, res, next) {
    data = {
      title: "Your outgoings",
      phase_banner: true,
      back_link: "/your-savings"
    }
    res.render("your-outgoings/index", data);
  })
  .post(function(req, res, next) {
    res.redirect("/dependent-children");
  });


// dependent children
router.route("/dependent-children")
  .get(function(req, res, next) {
    data = {
      title: "Dependent children",
      phase_banner: true,
      back_link: "/your-outgoings"
    }
    res.render("dependent-children/", data);
  })
  .post(function(req, res, next) {
    res.redirect("/check-your-answers");
  });


// check your answers
router.route("/check-your-answers")
  .get(function(req, res, next) {

    if (req.session.howDoYouPlead === "Guilty") {
      var how_do_you_plead = "Guilty"
    } else {
      var how_do_you_plead = "Not guilty"
    }

    data = {
      title: "Check your answers",
      phase_banner: true,
      how_do_you_plead: how_do_you_plead,
      back_link: "/dependent-children"
    }

    res.render("check-your-answers/", data);

  });


// declaration
router.route("/declaration")
  .get(function(req, res, next) {
    data = {
      title: "Declaration",
      phase_banner: true,
      back_link: "/check-your-answers"
    }
    res.render("declaration/index", data);
  })
  .post(function(req, res, next) {
    res.redirect("/your-plea-has-been-submitted");
  });


// your plea has been submitted
router.route("/your-plea-has-been-submitted")
  .get(function(req, res, next) {
    data = {
      title: "Your plea has been submitted",
      phase_banner: true
    }
    res.render("your-plea-has-been-submitted/index", data);
  });


// thank you
router.route("/thank-you")
  .get(function(req, res, next) {
    data = {
      title: "Thank you",
      phase_banner: true
    }
    res.render("thank-you", data);
  })
  .post(function(req, res, next) {
    res.redirect("/");
  });


// help and advice
router.route("/help-and-advice")
  .get(function(req, res, next) {
    data = {
      title: "Help and advice",
      phase_banner: true
    }
    res.render("help-and-advice/index", data);
  });


module.exports = router
