const express = require('express');
const router = express.Router();
const path = require('path');
var pool = require(path.resolve(__dirname, "./connection.js"));

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


// Define the home page route
router.get('/', function (req, res) {
    res.send('home');

});

// Define the about route
router.get('/about', function (req, res) {

    pool.getConnection(function (err, conn) {

        if (err) {
            console.log(err);
        }

        else {
            // Do something with the connection
            conn.query('SELECT * FROM user', function (err, results, fields) {
                console.log(results);
            });
            // release the connection when finished
            pool.releaseConnection(conn);

            res.send('About us');
        }
    })

});


module.exports = router;