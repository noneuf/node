function Emitter() {
	this.events = {};
} //creating the emitter constructor

Emitter.prototype.on = function(type, listener) { // on is a therm used to say, upon an event happening do such and such
	this.events[type] = this.events[type] || [];
	//checks if exists, if not creates a new array as a property
	//of this.event, type will be the name of the property that 
	//will be given when on is invoqued.
	this.events[type].push(listener);
} // will be availlable in every instance of Emitter.

Emitter.prototype.emit = function(type) { //emit is used comonly to say an event occured.
	if (this.events[type]) { //checks if this.events as a property of 'type' which will be the parameter passed when called.
		this.events[type].forEach(function(listener) {
			listener(); 
		});
	}
} // will be availlable in every instance of Emitter.

module.exports = Emitter;