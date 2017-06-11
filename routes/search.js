var express = require('express');
var router = express.Router();
var hotelDao = require('../dao/HotelDao')


router.get('/:kw/(:page)', function (req, res, next) {

  var page = parseInt(req.params.page) || 1;
  var keyword = req.params.kw;

  console.log(page);

  hotelDao.search(keyword, page, function (data) {
    res.render('search', {
      title: '酒店列表',
      page: [page, page + 1, page + 2],
      prev: page == 1 ? 1 : page - 1,
      next: page + 1,
      keyword: keyword,
      list: data,
    });
  });


});

module.exports = router;