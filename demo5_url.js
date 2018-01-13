/**
 * @author Santha Perian
 * This is a serverside js code
 * 
 * 1. Shows how to create a file
 * 2. Throws error when file cannot be created
 */

//Import Module for URL 
var myURLModule = require('url');

var myDummyAddress = 'http://localhost:8080/default.htm?iowaYear=2017&iowaMonth=february';
var myResult = myURLModule.parse(myDummyAddress, true);
console.log(myResult.host);         //localhost:8080
console.log(myResult.pathname);     //  /default.htm
console.log(myResult.path);         //  /default.htm?year=2017&month=february
console.log(myResult.port);         //8080
console.log(myResult.search);       //?year=2017&month=february
console.log(myResult.query);           //{ year: '2017', month: 'february' }  JSON format

var myQueryData = myResult.query;
console.log(myQueryData.iowaYear);  //get value from query result
console.log(myQueryData.iowaMonth); //get value from query result

