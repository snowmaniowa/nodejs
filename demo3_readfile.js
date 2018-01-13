/**
 * This is a serverside js code 
 * shows how to read a file and return the content
 * 
 * Common use for the File System module:
    Create files
    Read files
    Update files
    Delete files
    Rename files
 */

//Import Module for File System  
var myFileSystemModule = require('fs');

var myHttpModule = require('http');
myHttpModule.createServer(function (myRequest, myResponse){

    myFileSystemModule.readFile('demo3_readfile.js', function(myError, myData){
        myResponse.writeHead(200, {'Content-Type': 'text/html'});
        myResponse.write("<pre>")
        myResponse.write(myData);
        myResponse.end();
    });

}).listen(8080);