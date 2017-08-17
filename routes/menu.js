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

router.get('/all_list', function(req, res, next){
    var json_result = {};
    get_menu_promise = index_model.getMenu()
        .then(function(result){
            json_result.menu_list = result
        })
        .catch(function(error){
            res.json(error)
        });

    get_shop_promise = index_model.getShop()
        .then(function(result){
            console.log(result);
            json_result.shop_list = result
        })
        .catch(function(error){
            res.json(error)
        });

    Promise.all([get_menu_promise, get_shop_promise])
        .then(function(){
            console.log(json_result);
            res.json(json_result)
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