var express = require('express');
var app = express();
var routes = require('./routes/routes.js');

app.use('/api', routes);

var port = process.env.PORT || 8888;

app.listen(port);
console.log('server listening on port: ', port);