// imports
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
// import routes = require('./routes/routerMain');
var path = require('path');

// Create a new express application instance
var app = express();

// setup for cookies
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'sebmandal.com=your_mom',
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //   secure: true // true if httpS
  // }
}));

// to be able to do: req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// setting up views/engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views/pages/'));

var router = require('./routes/routerMain');
app.use(router);

// start server
app.listen(3000);
console.log('Running on port 3000');
