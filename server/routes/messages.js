var express = require('express');
var router = express.Router();
// bring in our Mongoose model
// var myMessages = require('../models/myMessages.schema.js');
var myMessages = require('../models/myMessages.schema.js');


router.get('/', function(req, res) {
    // find all of the people in the collection
    myMessages.find({}, function(err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            console.log('found data: ', data);            
            res.send(data);
        }
    });
});


router.post('/', function(req, res) {
    console.log('new message to store: ', req.body);

    // use model/constructor to make a Mongoose Object
    var messageToAdd = new Person(req.body);

    // insert into our collection
    messageToAdd.save(function(err, data) {
        console.log('saved to the collection: ', data);
        if(err) {
            console.log('save error: ', err);
            
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
        
    });
});

module.exports = router;