var express = require('express');
var app = express();
var routes = require('./routes/routes.js');

app.use('/api', routes);

var port = process.env.PORT || 8888;

app.listen(port);
console.log('server listening on port: ', port);


//New Server code. Uncomment and test

const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const moment = require('moment');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static('./client'));

app.use(cors());

// Routes for endpoints
app.use('api/user', userRoutes);
app.use('api/coach', coachRoutes);

app.get('*', (request, response) => {
	response.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

const port = process.env.PORT || 8888;

app.listen(port);
console.log('server listening on port: ', port);
