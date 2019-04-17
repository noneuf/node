var Emitter = require('events'); //we access events from the node library core
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() { //we replace the event name (property) with variables
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);