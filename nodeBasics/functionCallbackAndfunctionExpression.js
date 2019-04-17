// function statment
const greet = "Hi";

greeting = () => {
    console.log(`${greet}`);
}

greeting();

//functions are first-class, which means we can pass them arround like variables.
logGreeting = (fn) => {
    fn(); //we can use our argument as a function since its first-class
}

logGreeting(greeting); //then we invoque logGreeting and give it a parameter that is a function. 
//WE DO NOT PUT () SINCE THAT WOULD RUN THE FUNCTION. all we want is to assign a parameter. 
//So when logGreeting is invoqued here it goes to its definition and replace fn with greeting and runs
// or invoque it (greeting()).

// function expression
var greetMe = () => {
    console.log('Hi Nathan');
} //we store a function within a variable, so the function itself is anonymous but...

greetMe(); // we can invoque it by invoquing the variable holding it.
logGreeting(greetMe); //and since its first-class we can pass it (our greetMe variable) as a parameter 
//to another function

// use a function expression on the fly
logGreeting(()=>{
    console.log('Hello Nathan!'); //we create a function on the fly within logGreeting. That function is used only
    //once here in logGreeting so no need to store it in a variable.
})