/*
 * Module dependencies
 */

var sslRedirect = require("heroku-ssl-redirect");
var express     = require("express");
var exphbs      = require("express-handlebars");
var session     = require("express-session");
var bodyParser  = require("body-parser");
var router      = express.Router();
var port        = (process.env.PORT || 3000);
var app         = express();


/*
 * Enable SSL redirect
 */

app.use(sslRedirect());


/*
 * Locals
 */

app.locals = {
  baseurl: "/",
  apptitle: "Make a plea"
}


/*
 * Body parser
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/*
 * Session
 */

app.use(session({
  secret: "123456789",
  resave: true,
  saveUninitialized: true
}));


/*
 * Helpers
 */

var helpers = require("handlebars-helpers")();


/*
 * Serve static assets
 */

app.use("/public", express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/models"));
app.use(express.static(__dirname + "/views"));


/*
 * Handlebars template engine
 */

app.engine("hbs", exphbs({
  defaultLayout:"index",
  extname:".hbs"
}));

app.set("view engine", "hbs");


/*
 * Routing
 */

app.use(require("./routes/"));


/*
 * App listen
 */

app.listen(port);
console.log("App started on port " + port);
