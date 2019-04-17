(function () { //this is a immediatly invoqued function
    var firstname = "John"
    console.log(firstname)
}()); // <-- invoqued here   the point is that the var firstname inside the function stays inside the function.

var firstname = "Jane";
console.log(firstname)