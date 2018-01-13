/**
* Node.js is perfect for event-driven applications.
* Every action on a computer is an event. Like when a connection is made or a file is opened.
* Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:
*/

//create an event handler
var myPrintEventHandler = function(){
    console.log("This is a printing event.. ha haa..!!");
};


//Import module for event
var myEvent = require('events');
var myEventEmitter = new myEvent.EventEmitter();
myEventEmitter.on('PRINT_EVENT', myPrintEventHandler);    //Assign the event handler to an event
myEventEmitter.emit('PRINT_EVENT');                       //Fire the event



