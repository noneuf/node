const http = require('http');// to create a connection to the server
const fs = require('fs'); // to be able to read files

http.createServer((req, res) => { //creating a server comunication

    res.writeHead(200, { 'Content-Type': 'text/html' }); //headers, here I set the content type to be html, it could have been plain/text and other.
    fs.createReadStream(__dirname + '/index.htm').pipe(res); //here we 
    //create a readable stream and use pipe on hte res (our html file) to send it a chunk at the time.
    //this will allow our app to be faster.
}).listen(1337, '127.0.0.1'); //listening on specific port