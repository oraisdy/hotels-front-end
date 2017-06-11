var express = require('express');
var router = express.Router();
var hotelDao = require('../dao/HotelDao')
var mtDao = require('../dao/MeiTuanDao')


router.get('/:id', function (req, res, next) {

  var id = req.params.id;
  var item, rooms;

  hotelDao.queryById(id, function (data) {
    item = data;
    handle();
  });

  mtDao.queryByHid(id, function (data) {
    rooms = data;
    rooms.forEach((e) => {
      e.roomservice = e.roomservice.split(/；|\+/);
    });
    handle();
  });


  function handle() {
    if (item !== undefined && rooms !== undefined) {
      // console.dir("bbbbb "+item.id);
      //  console.dir("bbbbb "+rooms[0].hid);
      res.render('item', {
        title: item.name,
        item: item,
        rooms: rooms
      })
    }
  }

});

module.exports = router;