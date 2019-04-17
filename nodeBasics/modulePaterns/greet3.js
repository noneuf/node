function Greet() {
    this.greeting = 'Hello again';
    this.greet = function() {
        console.log(this.greeting)
    }
}

module.exports = new Greet();