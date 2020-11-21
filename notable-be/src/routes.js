const { response } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');
var pool = require(path.resolve(__dirname, "./connection.js"));
const bodyParser = require("body-parser");
router.use(bodyParser.json());

//CORS resolution
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
                        if (err) { { res.status(404).json(responseObject); } }
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
router.get('/notes', function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) { res.status(400).json("Could not connect to database, check server"); }
        else {
            conn.query('SELECT * FROM data LEFT JOIN note ON data.dataid = note.dataref LEFT JOIN image ON image.data = data.dataid WHERE data.user = ?', req.query.userid, function (err, userNotes, fields) {
                if (err) { { res.status(404).json(err.message); } }
                else { res.status(200).json(userNotes); }
            })
            pool.releaseConnection(conn);
        }
    })
})


//create note API
router.post('/create', function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) { res.status(400).json("Could not connect to database, check server"); }
        else {
            conn.query('INSERT IGNORE INTO data (user, name, date) VALUES (?,?,?)', [req.body.user, req.body.name, req.body.date], function (err, results) {
                if (err) { res.status(404).json(err.message); }
                else {
                    conn.query('INSERT IGNORE INTO note (name, text, dataref, img) VALUES (?,?,?,?)', [req.body.name, req.body.text, results.insertId, req.body.img], function (err2, note) {
                        if (err2) { res.status(404).json(err2.message); }
                        else {
                            conn.query('SELECT * FROM data LEFT JOIN note ON data.dataid = note.dataref WHERE data.dataid = ?', [results.insertId], function (err3, insertedNote) {
                                if (err3) { res.status(404).json(err3.message); }
                                else {
                                    if(insertedNote.length == 0){
                                      res.status(200).json("This item already exists");
                                    }
                                    else{
                                    res.status(200).json(insertedNote);
                                    }
                                }
                            })
                        }
                    })
                    }
                    pool.releaseConnection(conn);
            });

        }
    })
})

//update note API
router.post('/update', function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) { res.status(400).json("Could not connect to database, check server"); }
        else {
            conn.query('UPDATE note SET text = ? WHERE noteid = ?', [req.body.text, req.body.noteid], function (err, update, fields) {
                if (err) { res.status(404).json(err.message);  }
                else { 
                    conn.query('SELECT * FROM note WHERE noteid = ?', req.body.noteid, function (err2, updatedNote){
                        if (err2){ res.status(404).json(err.message); }
                        else {
                            res.status(200).json(updatedNote); }
                    })
                    }

            })
            pool.releaseConnection(conn);
        }
    })
})

module.exports = router;