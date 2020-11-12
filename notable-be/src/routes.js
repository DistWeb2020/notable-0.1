const { response } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');
var pool = require(path.resolve(__dirname, "./connection.js"));
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// // Define the home page route
// router.get('/', function (req, res) {
//     res.send('home');

// });

//login API
router.get('/login', function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) { res.status(400).json("Could not connect to database, check server"); }

        else {
            responseObject = {};
            responseObject.notes = [];
            //check that user exists

            conn.query('SELECT * FROM `user` WHERE `username` = ? AND `password` = ?', [req.query.username, req.query.password], function (err, userObject, fields) {
                if (err) { res.status(404).json("User does not exist"); }

                else {
                    responseObject.userid = userObject[0].userid;
                    responseObject.firstname = userObject[0].firstname;
                    responseObject.lastname = userObject[0].lastname;

                    //return all notes for the user
                    conn.query('SELECT * FROM `data` WHERE `user` = ?', [responseObject.userid], function (err, userNotes, fields) {
                        if(err){{ res.status(200).json(responseObject); }}
                        else {

                        responseObject.notes = userNotes.map(v => Object.assign({}, v));

                        res.status(200).json(responseObject);
                        }
                    });
                }
            });
            pool.releaseConnection(conn);
        }
    })
});

//get notes API
router.get('/notes', function(req, res){
    pool.getConnection(function (err, conn){
        if (err) { res.status(400).json("Could not connect to database, check server"); }
        else {
            responseObject = {}
            
            conn.query('SELECT * FROM data LEFT JOIN note ON data.dataid = note.dataref LEFT JOIN image ON image.data = data.dataid WHERE data.user = ?', req.query.userid, function (err,userNotes, fields ) {
                if(err){{ res.status(200).json(responseObject); }}
                else {

                    console.log(userNotes);
                    res.status(200).json(userNotes);
                    }
            })
        }
    })
})

module.exports = router;