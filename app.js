const express = require('express');
const morgan = require('morgan');
const expressLayout = require('express-ejs-layouts')
const app = express();

// View Engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(expressLayout)

// Middleware
app.use(morgan('dev'));

// Parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Middleware default content-title
const setDefault = (req, res, next) => {
  res.locals.contentTitle = "Default"
  next()
}

app.get('/', (req, res) => {
  res.status(200).send("Hello World");
})

module.exports = app;
