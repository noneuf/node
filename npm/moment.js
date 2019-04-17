const moment = require('moment');//after installed the moment package from the cli
//by doing nmp i moment --save (--save put it in the package.json file), we require it
// so that it can be used in our app.

console.log(moment().format('LL, LT')); //here we use moment to display the date in a formated way.
//to check how to format time go to: