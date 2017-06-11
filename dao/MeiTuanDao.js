var conf = require('../conf/db');
var mysql = require('mysql');

const sql = {
	queryByHid: 'select * from intergrate_room where id=?',
};
 

var pool  = mysql.createPool(conf.mysql);
 
 
module.exports = {
	queryByHid: function (id, callback) {
		pool.getConnection(function(err, connection) {
			// var id = ""+id;
			connection.query(sql.queryByHid, id, function(err, result) {
				// console.log(err);
				callback(result);
				connection.release();
			});
		});
	}
};