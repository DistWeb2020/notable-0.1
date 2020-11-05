const { response } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');
var pool = require(path.resolve(__dirname, "./connection.js"));
const bodyParser = require("body-parser");

// //Middle ware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });

router.use(bodyParser.json());

// Define the home page route
router.get('/', function (req, res) {
    res.send('home');

});

//login API
router.get('/login', function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) { res.status(400).json("Could not connect to database, check server"); }

        else {
            responseObject = {};
            responseObject.notes = [];
            //check that user exists

            conn.query('SELECT * FROM `user` WHERE `username` = ? AND `password` = ?', [req.body.username, req.body.password], function (err, userObject, fields) {
                if (err) { res.status(404).json("User does not exist"); }

                else {
                    responseObject.userid = userObject[0].userid;
                    responseObject.firstname = userObject[0].firstname;
                    responseObject.lastname = userObject[0].lastname;

                    //return all notes for the user
                    conn.query('SELECT * FROM `data` WHERE `user` = ?', [responseObject.userid], function (err, userNotes, fields) {
                        responseObject.notes = userNotes.map(v => Object.assign({}, v));

                        res.status(200).json(responseObject);
                    });
                }
            });
            pool.releaseConnection(conn);
        }
    })
});


module.exports = router;