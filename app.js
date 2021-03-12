const express = require('express');
const morgan = require('morgan');
const expressLayout = require('express-ejs-layouts');
const passport = require('./lib/passport');
const session = require('express-session');
const app = express();

// View Engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout', 'layouts/default')

// Middleware
app.use(morgan('dev'));

app.use(session({
  secret: "Secret",
  resave: false,
  saveUninitialized: false
}))

// Parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

// Middleware default content-title
const setDefault = (req, res, next) => {
  res.locals.contentTitle = "Default"
  next()
}
app.use(setDefault);

const router = require('./routes/index.routes');
app.use(router);

// app.get('/', (req, res) => {
//   res.status(200).send("Hello World");
// })

module.exports = app;
