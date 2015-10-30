var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// Include the Todo-lists service and let it bind to the application
var todoService = require('./services/todo.js');
var userService = require('./services/user.js');
todoService.LinkApp(app);
userService.LinkApp(app);

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Direct your browser to http://%s:%s/api/users', host, port);
});
