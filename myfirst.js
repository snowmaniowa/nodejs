var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello Santha... welcome to Node JS!');

//var myAssert = require('assert');
//assert(125 > 104);

var myPath = require('path');
var myFileName = myPath.basename('/dev/sandbox/nodejs/myfirst.js');
console.log(myFileName);


}).listen(8080);