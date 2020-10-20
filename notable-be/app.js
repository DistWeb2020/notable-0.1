// runs server-side stuff
var express = require("express");
var app = express();
app.listen(3001, () => {
  console.log("Server running on port 3001");
});