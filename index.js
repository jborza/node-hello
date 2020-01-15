var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World! The time is: '+new Date().toLocaleTimeString('en-US')); 
  res.end(); 
}).listen(8080);  