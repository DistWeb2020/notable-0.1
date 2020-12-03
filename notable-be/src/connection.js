let mysql = require('mysql2');

// pool initialization so we don't have to create a connection every time
let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Sol1dFoundat1on!",
  database: "notable",
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;