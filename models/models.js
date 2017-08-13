/**
 * Created by donghyunkim on 2017. 8. 10..
 */

var db = require('../modules/db').get_instance();

exports.getCategory = function(){
    db.
    select().from('Category')
        .then(function(result){
            console.log(result)
        })
};

exports.getShop = function(){
    db.
        select().from('Shop').
        then(function(result){
            console.log(result)
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
        db.select().where('name',_name).from('Menu')
            .then(function(result){
                resolve(result);
                db.where('name',_name).del().from('Menu')
                    .then(function(result){
                        resolve(_name+"삭제 완료")
                    })
                    .catch(function(error){
                        reject(error)
                    })
            })
    })
};
