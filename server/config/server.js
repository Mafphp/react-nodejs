const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const server = express();

server.use(cors());
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));
// vehicles
const vehiclesRoutes = require('../src/Routes/vehiclesRoutes');
server.use('/vehicles', vehiclesRoutes);
// brands
const brandsRoutes = require('../src/Routes/brandsRoutes');
server.use('/brands', brandsRoutes);
// categories
const categoriesRoutes = require('../src/Routes/categoriesRoutes');
server.use('/categories', categoriesRoutes);
// models
const modelsRoutes = require('../src/Routes/modelsRoutes');
server.use('/models', modelsRoutes);
// aggregate
const aggregateRoutes = require('../src/Routes/aggregateRoutes');
server.use('/aggregate', aggregateRoutes);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
    next(createError(404));
});

module.exports = server;