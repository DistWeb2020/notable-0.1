// Create express app
const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");


app.use(express.static('public'));

//Routes - seperated routes and server
app.use(require('./routes')); 

// Server port
let HTTP_PORT = process.env.PORT || 8000;;

let server = app.listen(HTTP_PORT, function () {

    let host = server.address().address
    let port = server.address().port
  
    console.log("Example app listening at http://%s:%s", host, port)
  
  })
