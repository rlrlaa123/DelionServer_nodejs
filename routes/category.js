/**
 * Created by donghyunkim on 2017. 8. 10..
 */
var express = require('express');
var router = express.Router();

var index_model = require('../models/models');

/* GET home page. */
router.get('/list', function(req, res, next) {
    res.json(index_model.getCategory())
        .then(function(result){
            resolve(result)
        })
        .catch(function(error){
            reject(error)
        })
});

module.exports = router;