const greet = require('./moduleExportsGoesWithRequire'); //get a greet.js (changed into moduleExportsGoesWithRequire.js)
// into app.js, so now if I run in cli the
// app.js file (this file), the content of greet.js is going to be executed. we can even ommit
//the .js at the end of the file path.

greet(); //this won't work, because we try to use a function that is defined in another 
//file (greet.js). Altough we do require it in our file (app.js) we cannot use functions
// varaibles etc that are defined in greet.js.

//what if want to make the function greet() available in app.js?
// we need to use module.exports in the file where the function is defined (greet.js).
// But we also need to put our require within a variable
// const greet = require('./greet.js'); as we do at the top of app.js
// and now we can just access the greet() function with this syntax: greet();