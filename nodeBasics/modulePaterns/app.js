const greet = require('./greet1');

greet();

const greet2 = require('./greet2').greet;
greet2();

const greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed Hello message'; //so this creates a new instance of the Greet() constructor
//function in greet3.js, notice that changeing the output of greeting
//will affect greet3b.greet() output as weel, in fact what is happening is that
//the instance of the Greet() constructor function that is created here is cached
//and when we require again greet3.js it uses that cached instance, that is
//why the output is affected. greeting() output in the Greet constructor insn't affected, its the instance of it that is affected. 
const greet3b = require('./greet3');
greet3b.greet();





