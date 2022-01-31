var http = require('http')
var url = require('')
http.createServer((req, res)=>{
res.writeHead(200,{'content-type':'text/html'})
res.write('hello world')
res.end()
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
