const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var cors = require('cors');
const server = express();
const jwt = require('jsonwebtoken');

server.use(cors());
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '..', 'public')));

server.use(cookieParser());
server.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: true,
        maxAge: 1000 * 60 * 60
    }
}));


// authentication
const authRoutes = require('../src/Routes/authRoutes');
server.use('/', authRoutes);

function authenticateToken(req, res, next) {
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next() // pass the execution off to whatever request the client intended
    })
}
// server.use(authenticateToken);


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
server.use('/models' ,modelsRoutes);
// users
const usersRoutes = require('../src/Routes/usersRoutes');
server.use('/users' , usersRoutes);

module.exports = server;