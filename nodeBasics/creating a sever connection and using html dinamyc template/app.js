const http = require('http');// to create a connection to the server
const fs = require('fs'); // to be able to read files

http.createServer((req, res) => { //creating a server comunication

    res.writeHead(200, { 'Content-Type': 'text/html' }); //headers, here I set the content type to be html, it could have been plain/text and other.
    let html = fs.readFileSync(__dirname + '/index.htm', 'utf8'); //getting my html file and store it in html let (let since we are going to reasign it a value later)
    const message = "Hello world...";
    html = html.replace('{Message}', message);//our placeholder of Message in the html file is replaced 
    //with the message variable. this is what is called a dinamyc template.
    res.end(html); //sending the html file as the response to the dom.

}).listen(1337, '127.0.0.1'); //listening on specific port