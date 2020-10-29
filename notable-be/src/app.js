// Create express app
var express = require("express");
var app = express();
var db = require("./database.js");

// Server port
var HTTP_PORT = 3001 ;
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/login", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Insert here other API endpoints

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
