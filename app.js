/*
 * Module dependencies
 */

var express    = require('express');
var exphbs     = require('express-handlebars');
var bodyParser = require('body-parser');
var router  = express.Router();
var port    = (process.env.PORT || 3000);
var app     = express();


/*
 * Body parser
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/*
 * Helpers
 */

var helpers = require('handlebars-helpers')();


/*
 * Serve static assets
 */

app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/models'));
app.use(express.static(__dirname + '/views'));


/*
 * Handlebars template engine
 */

app.engine('hbs', exphbs({
  defaultLayout:'index',
  extname:'.hbs'
}));

app.set('view engine', 'hbs');


/*
 * Routing
 */

app.use(require('./routes/'));


/*
 * App listen
 */

app.listen(port);
console.log('App started on port ' + port);
