/**
 * Created by donghyunkim on 2017. 8. 10..
 */

var db = require('../modules/db').get_instance();

exports.get = function(){
    db.
        select().
        from('Category')
        .then(function(result){
            console.log(result)
        })
};