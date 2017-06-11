var express = require('express');
var router = express.Router();
var hotelDao = require('../dao/HotelDao')


router.get('/:kw', function (req, res, next) {
  hotelDao.search(req.params.kw, function (data) {
    res.render('list', {
      title: '酒店列表',
      list: data,
    });
  });


});

module.exports = router;