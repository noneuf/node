const http = require('http');// to create a connection to the server
const fs = require('fs'); // to be able to read files

http.createServer((req, res) => { //creating a server comunication

    res.writeHead(200, { 'Content-Type': 'application/json' }); //headers, here I set the content type to application/json, it could have been plain/text and other.
    const obj = { //an object we will send back as a response to the request
        firstname: "Nathan",
        lastname: "Goel"
    }
    res.end(JSON.stringify(obj)); //we serialize (convert so that it can be transfered), so it converts to a string format.
}).listen(1337, '127.0.0.1'); //listening on specific port