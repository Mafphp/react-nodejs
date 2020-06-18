const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors');
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '..', 'public')));

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

module.exports = server;