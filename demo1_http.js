
/**
 * This is serverside js code
 */

//Import http module
var myHttpModule = require('http');

myHttpModule.createServer(function(myRequest, myResponse){
    
    //write response to client
    myResponse.write('Hello... NodeJS World');

    //end the response
    myResponse.end();

}).listen(8080);