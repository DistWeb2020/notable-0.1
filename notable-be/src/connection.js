let mysql = require('mysql2');

// pool initialization so we don't have to create a connection every time
let pool = mysql.createPool({
  host: "localhost",
  user: "root",
<<<<<<< HEAD
  password: "Computertechie2020",
=======
  password: "password",
>>>>>>> 65cd404720ab195e1a507200e3dd75e6fa161d3b
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