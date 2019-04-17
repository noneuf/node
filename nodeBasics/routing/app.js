const http = require('http');// to create a connection to the server
const fs = require('fs'); // to be able to read files

http.createServer((req, res) => { //creating a server comunication

    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
        //if the url is / we send the content of index.htm trough pipes so that it comes as chunk data pieces fluently.
    } 
    else if(req.url === '/api') { //if the url is /api we send that object of obj
        res.writeHead(200, { 'Content-Type': 'application/json' }); //headers, here I set the content type to application/json, it could have been plain/text and other.
        const obj = { //an object we will send back as a response to the request
            firstname: "Nathan",
            lastname: "Goel"
        };
        res.end(JSON.stringify(obj)); //we serialize (convert so that it can be transfered), so it converts to a string format.
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' }); //this is in case the page is not found, or in other worlds
        //the url isn't right and we get back a 404 error.
        let html = fs.readFileSync(__dirname + '/notFound.htm');//I set a variable to a html file
        res.end(html) //and send it to the browser.
    }
    
    

}).listen(1337, '127.0.0.1'); //listening on specific port