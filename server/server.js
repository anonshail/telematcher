const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const app = express();
const { allowedOrigins } = require('./config.js');

/**
 * Configuring cors policy to only allowed hosts
 */
app.use(cors({
  origin: allowedOrigins
}));

app.use('/', routes);
app.listen(8080);