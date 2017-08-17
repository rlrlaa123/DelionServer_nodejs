/**
 * Created by donghyunkim on 2017. 8. 10..
 */

var db = require('../modules/db').get_instance();

exports.getCategory = function(){
    return new Promise(function(resolve,reject){
        db.select().from('Category')
            .then(function(result){
                resolve(result)
            })
            .catch(function (error){
                reject(error);
            })
    })
};

exports.getShop = function(){
    return new Promise(function(resolve,reject){
        db.select().from('Shop')
            .then(function(result){
                resolve(result)
            })
            .catch(function (error){
                reject(error);
            })
    })
};

exports.getMenu = function(){
    return new Promise(function(resolve,reject) {
        db.select().from('Menu')
            .then(function (result) {
                resolve(result)
            })
            .catch(function (error) {
                reject(error)
            })
    })
};

exports.postMenu = function(_shopid, _name, _extender, _price){
    return new Promise(function(resolve,reject) {
        db.insert({
            shopid:_shopid,
            name:_name,
            extender:_extender,
            price:_price
        }).into('Menu')
            .then(function(result){
                db.select().where('id',result).from('Menu')
                    .then(function (result){
                        resolve(result)
                    })
                    .catch(function (error) {
                        reject(error)
                    })
            })
            .catch(function(error){
                reject(error)
            })
    })
};

exports.deleteMenu = function(_name){
    return new Promise(function(resolve,reject){
        db.where('name',_name).del().from('Menu')
            .then(function(result){
                db.select().where('name',_name).from('Menu')
                    .then(function (result){
                        resolve(result)
                    })
                    .catch(function(error){
                        reject(error)
                    })
            })
            .catch(function(reject){
                reject(error)
            })
    })
};

exports.updateMenu = function(_shopid,_name,_extender,_price) {
    return new Promise(function (resolve, reject) {
        db.where('name','=',_name).update({
            'shopid':parseInt(_shopid),
            'name':_name,
            'extender':parseInt(_extender),
            'price':parseInt(_price)
        }).from('Menu')
            .then(function (result) {
                db.select().where('name',_name).from('Menu')
                    .then(function(result){
                        resolve(result);
                    })
                    .catch(function(error){
                        reject(error)
                    })
            })
            .catch(function (error) {
                reject(error)
            })
    })
};