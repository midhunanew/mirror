// Load the http module to create an http server.
var http = require('http'),
visiterCount = 0;

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
visiterCount++;
console.log("Visiter %d on ip {%s} for address : %s",visiterCount,request.connection.remoteAddress,request.url);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
