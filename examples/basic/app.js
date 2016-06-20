'use strict';

const path = require('path');

const express = require('express');

const remarkable = require(path.join(__dirname, '..', '..', 'lib'));

const app = express();

app.engine('md', remarkable(app));

app.set('view engine', 'md');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/debug', (request, response) => {
  response.render('debug');
});

module.exports = app;
