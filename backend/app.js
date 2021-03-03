const express = require('express');
const app = express();
require('./src/db/mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const photoRoutes = require('./src/routes/router');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS Handeling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
})

app.use('/api', photoRoutes);

module.exports = app;