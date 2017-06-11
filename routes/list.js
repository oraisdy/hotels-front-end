var express = require('express');
var router = express.Router();
var dao = require('../dao/HotelDao')


router.get('/', function (req, res, next) {

  
  dao.queryAll(function (data) {
    res.render('list', {
      title: '酒店列表',
      list: data,
    });
  });

 

});

router.get('/keyword')

module.exports = router;