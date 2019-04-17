// pass by value
change = (b) => {
    console.log(b);
    b = 2 ;
    console.log(b);
}
//we have a variable that holds the number 1
const a = 1;
//we invoque the change function and we give it as a value the a variable
change(a);
//what will happen is that a new copy of a will be created within the
//scope of the change function
//so inside change function, first time we console.log b (which is a now)
// it will print 1, then we change the value a of a to 2 so next console.log
// will print 2.
//But since passing by value creates a new version of the value we pass,
// the original a wont be affected by the change() function.

console.log(a); //and so here when we try to check a's value it will
//still be 1.


//pass by reference.
const user = {
    name: 'Nathan',
    age: 33
}

changeName = (n) => { //the name parameter points to the reference of user, it doesn't create a new object
    console.log(n.name); //so here we will have Nathan
    n.name = 'Limor'; //here we will change the value of user.name
    console.log(n.name); // and so here we will have the new value of user.name: Limor
} 
console.log(user.name); //Nathan
changeName(user);
console.log(user.name); //Limor, because passing by refference affects what we pass directly.