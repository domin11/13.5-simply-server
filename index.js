var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET') {
		if (request.url === '/') {
			response.setHeader("Content-Type", "text/html; charset=utf-8");
			fs.readFile('./index.html', 'utf-8', function(err, data) {
				response.write(data);
				response.end();
			});
		} else if (request.url === '/css/style.css') {
			response.setHeader("Content-Type", "text/css");
			fs.readFile('./css/style.css', function(err, data) {
				response.write(data);
				response.end();
			});	
		}
	}	
	else {
		response.setHeader("Content-Type", "image/jpeg");
		fs.readFile('./images/404.jpg', function(err, data) {
			if (err) throw err;
            response.statusCode = 404;
            response.write(data);
            response.end();
		 });	
    }
});

server.listen(9000);