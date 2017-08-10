/**
 * Created by donghyunkim on 2017. 8. 10..
 */

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'ehehdd009',
        database: 'testdb'
    }
});

exports.get_instance = function(){
    return knex
};