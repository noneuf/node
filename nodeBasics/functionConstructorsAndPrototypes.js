function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}`)
} //this is a prototype method of the Person object. it is accessible to all the instances of 
// the Person constructor function.

const john = new Person('John', 'Doe'); // the new keyword makes a new empty object and it
// uses the Person constructor functions properties and gives a value to firstname and
// lastname trough the parameters/arguments. 
// So now theoriticaly we have a new instance of Person that has a firstname of John and a
// lastname of Doe ==> { firstname: 'John', lastname: 'Doe'}; which is stored in the john variable.

john.greet();//so because we have the Person.propotype we can use the greet function.
const nathan = new Person('Nathan', 'Goel'); //if we declare a new instance of Person we can
//access the Person prototype as well for that person.
nathan.greet();