const express = require('express'); 
const app = express(); 

const port = process.env.PORT || 3000; 
const user = 'Nathan Goel';

app.use('/assets', express.static(__dirname + '/public')); //<-- This is middleware between the request and the response, and it will respond by streaming back this file for me.
//So, the browser is going to download this HTML, see this link tag, and generate an HTTP request
//for my site / assets/style.css. (assets is just a world we chose) That HTTP request will be handled by Node,
//and when it sees the /assets part it will say, "Okay, anything after that
//"I will look for it in this folder."
app.get('/', (req, res) => { 
    res.send(`
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Page Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href=assets/style.css type=text/css rel=stylesheet />
    </head>
    <body>
        <p>Hello ${user}</p>
    </body>
    </html>
    `)
})

//we can also make our own middleware. 
app.use('/', (req, res, next) => { //so here fore each time I will do a request to that url path (/)
    //it will do the console.log
    console.log(`Request URL: ${req.url}`);
    //then, next, which says keep runing to the next middleware
    next();
})
//and this is the next one...
app.get('/again', (req, res) => { 
    res.send(`
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Page Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href=assets/style.css type=text/css rel=stylesheet />
    </head>
    <body>
        <p>Hello again ${user}</p>
    </body>
    </html>
    `)
})

app.listen(port);
