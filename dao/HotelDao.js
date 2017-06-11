var conf = require('../conf/db');
var mysql = require('mysql');

const sql = {
	search: 'select * from meituan_hotel where name like ? limit 10',
	queryById: 'select * from meituan_hotel where id=?',
	queryAll: 'select * from meituan_hotel limit ?,10 '
};
 

var pool  = mysql.createPool(conf.mysql);
 
 
module.exports = {
	queryAll: function (page,callback) {
		pool.getConnection(function(err, connection) {
			connection.query(sql.queryAll, (page-1)*10, function(err, result) {
				callback(result);
				connection.release();
			});
		});
	},
	queryById: function (id, callback) {
		pool.getConnection(function(err, connection) {
			connection.query(sql.queryById, id, function(err, result) {
				callback(result[0]);
				connection.release();
			});
		});
	},
	search: function(kw,callback) {
		pool.getConnection(function(err, connection) {
			connection.query(sql.search, "%"+kw+"%", function(err, result) {
				callback(result);
				connection.release();
			});
		});
	}
};