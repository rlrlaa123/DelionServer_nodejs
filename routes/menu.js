/**
 * Created by donghyunkim on 2017. 8. 13..
 */
var express = require('express');
var router = express.Router();

var index_model = require('../models/models');

/* GET home page. */
router.get('/list', function(req, res, next){
    index_model.getMenu()
        .then(function(result){
            res.json(result)
        })
        .catch(function(error){
            res.json(error)
        })
});

router.post('/insert', function(req, res, next){
    console.log(req.body);
    index_model.postMenu(
        req.body['shopid'],
        req.body['name'],
        req.body['extender'],
        req.body['price']
    )
        .then(function(result){
            res.json(result)
        })
        .catch(function(error){
            res.json(error)
        })
});

router.delete('/delete', function(req, res, next){
    index_model.deleteMenu(req.body['name'])
        .then(function(result){
            res.json(result)
        })
        .catch(function(error){
            res.json(error)
        })
});

router.put('/update', function(req, res, next){
    console.log(req.body);
    index_model.updateMenu(
        req.body['shopid'],
        req.body['name'],
        req.body['extender'],
        req.body['price']
    )
        .then(function(result){
            res.json(result);
        })
        .catch(function(error){
            res.json(error);
        })
});
module.exports = router;