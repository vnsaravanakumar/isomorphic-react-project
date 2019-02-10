// Set up ======================================================================
// get all the tools we need
import express from 'express';
import http from 'http';
import logger from 'morgan';
import path from 'path';
import apiVersion1 from './api/api1';
import renderRouterMiddleware from '../iso-middleware/renderRoute';

const app = express();
const webpack = require('webpack');
const config = require('../webpack.config');
require('dotenv').config();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
// Configuration ===============================================================

app.set('port', process.env.PORT || 8080);
app.use(logger('short'));

// Request Handlers
const buildPath = path.join(__dirname, '../', 'build');

app.use('/', express.static(buildPath));
app.use('/api', apiVersion1);

app.get('*', renderRouterMiddleware);

// launch ======================================================================
// Starts the Express server on port 3001 and logs that it has started
http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server started at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

module.exports = app;
