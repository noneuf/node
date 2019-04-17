greet = (callback) => { //2 - It goes here to where greet function is
    //defined and runs it.
    console.log('Hello'); // 3 - prints that
    const user = {name: "Nathan"}; //4 - save that variable in memory 

    callback(user.name); // 5 - invoque the parameter callback, which is defined
    //as a argument when greet was called (see step 1), using as an argument user.name 
    //which is defined at step 5
}

asBeenGreeted = (user) => { //6 - it goes to the callback function that was invoqued
    // at step 5 and defined as an argument at step 1 and runs it.
    console.log(`${user} as been greeted`); // 7 - it prints that.
}

greet(asBeenGreeted); //1 - we invoque greet and give it a argument wich is 
// a function itself.