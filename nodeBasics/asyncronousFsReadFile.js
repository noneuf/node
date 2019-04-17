const fs = require('fs');

const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
//here we use readFileSync which do syncronous work.
console.log(greet);

const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', (err, data)=>{
// here we use readFile which is asyncronous, so we give it a callback as parameter
// and when it as finished to read the greet.txt file it runs that callback function 
//and console.log data wich is the content of the text file. if there was any
// error it wont read the file but instead return err as null.
    console.log(data);
});

console.log('done'); //this console.log is printed before the one into greet2 because 
// greet2 is asyncronous.