/**
 * @author Santha Perian
 * This is a serverside js code
 * 
 * The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
 */

//Import http module
var myHttpModule = require('http');

myHttpModule.createServer(function(myRequest, myResponse){
    
    //Setting content type (optional)
    myResponse.writeHead(200, {'Content-Type': 'text/html'});

    //write response to client
    myResponse.write('Happy Friday');

    //end the response
    myResponse.end();

}).listen(8080);
