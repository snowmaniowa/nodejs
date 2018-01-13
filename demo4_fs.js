/**
 * This is a serverside js code
 * 
 * 1. Shows how to create a file
 * 2. Throws error when file cannot be created
 */

var myFileSystemModule = require('fs');

myFileSystemModule.appendFile('ReadMeTemp.txt',
    'This is a Read me file created for testin',
    function(myError){
        if(myError){
            throw myError;
        }
});