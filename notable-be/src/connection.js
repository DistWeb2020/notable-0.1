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

// //example code
// pool.getConnection(function(err, conn) {

//   // Do something with the connection
//   conn.query('SELECT * FROM user',  function(err, results, fields) {
//     console.log(results); 
//   });
//   // release the connection when finished
//   pool.releaseConnection(conn);
// })

module.exports = pool;