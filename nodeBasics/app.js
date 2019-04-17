class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname,
        this.lastname = lastname
    };

    sayHello() {
        console.log(`Hello ${this.firstname + ' ' + this.lastname}`);
    };
};

const person1 = new Person('Goel', 'Nathan');

person1.sayHello();

