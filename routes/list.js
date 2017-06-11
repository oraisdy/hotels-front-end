var express = require('express');
var router = express.Router();
var dao = require('../dao/HotelDao')


router.get('/(:page)', function (req, res, next) {

  var page = parseInt(req.params.page) || 1;
  
  dao.queryAll(page,function (data) {
    res.render('list', {
      title: '酒店列表',
      page: [page, page+1, page+2],
      prev: page==1? 1:page - 1,
      next: page + 1,
      list: data,
    });
  });

 

});

router.get('/keyword')

module.exports = router;