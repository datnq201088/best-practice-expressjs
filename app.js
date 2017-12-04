'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// set up the express app
const app = express();

// Log requests to console.
app.use(logger('dev'));

// parse body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require our routes into the application.
require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;