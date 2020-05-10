const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../route');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// mount api  routes
app.use('/', routes);



module.exports = app;