const express = require('express');
const router = express.Router();
const Data = require('../models/profile');

// get a list of data from the database
router.get('/profile',function(req,res,next){
    Data.find({}).then(function(data){
        res.send(data);
    }).catch(next);
});

// add a new data to database
router.post('/profile',function(req,res,next){
    Data.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});

module.exports = router;