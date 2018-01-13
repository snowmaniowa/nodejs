
/**
 * This is serverside js code
 * 
 * Note: Run "npm install uppper-case" this command before running this program
 */

var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
    res.end();
}).listen(8080);