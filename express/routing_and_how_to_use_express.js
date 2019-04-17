const express = require('express'); //importing express to use it
const app = express(); //initializing express within app variable

const port = process.env.PORT || 3000; //process.env.PORT is refering to an Environment variables in the server. 
// bassicly it will listen to the port set on the server, or if we are on development mode, it will listen to port 3000
const user = 'Nathan Goel';


app.get('/', (req, res) => { //this fires a httprequest with the method of GET, receives
//two arguments, the path '/' and a callback function. the callback function receives also
//two arguments, req (request) and res(response).

//then we can actualy send some html using the res.send method. we can type actual html content
// without having to specifie the content type like we would have done without express:
// res.writeHead(200, { 'Content-Type': 'text/html' });
//express detects automaticly the type content.
    res.send(`
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Page Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <p>Hello ${user}</p>
    </body>
    </html>
    `)
})


app.get('/api', (req, res) => { //we can send trough a different url path some diffrent content type.
    res.json({ firstname: 'Nathan', lastname: 'Goel' }); //in this case an
    //object litteral that is converted to json.
})

app.get('/person/:id', (req, res) => { //we can also pass variables via the route
    //so any url that starts with /person, then has a /:id (my variable name and the colon)
    //tells Express, that this could be anything (instead of :id). In other worlds, /:id
    // is a parameter and on the real url we can pass a parameter and that will be sent
    //trough req.params.id.
    res.send(`<h1>User: ${req.params.id}</h1>`); //here we use our /:id parameter and send it to the browser.
}) //So this is a way to use the url and pull data out of it, data that might change.


app.listen(port);
