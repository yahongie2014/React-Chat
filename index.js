/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var http = require('http');

var socket = require('./routes/socket.js');

var app = express();
var server = http.createServer(app);

/* Configuration */
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.set('port', 5000);
app.get('/', function(request, response) {
  response.render('public/index');
});

/* Socket.io Communication */
var io = require('socket.io').listen(server);
io.sockets.on('connection', socket);

/* Start server */
server.listen(app.get('port'), function (){
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
