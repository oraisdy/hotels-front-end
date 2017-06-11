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
      var output = [];
      rooms.forEach(function (value) {
        var existing = output.filter(function (v, i) {
          // console.log(value.name + " "+ v.name+" " +(v.name == value.name));
          return v.roomtype == value.roomtype;
        });
        if (existing.length) {
          var existingIndex = output.indexOf(existing[0]);
          output[existingIndex].datafrom = output[existingIndex].datafrom.concat(value.datafrom);
          output[existingIndex].price = output[existingIndex].price.concat(value.price);
        } else {
          if (typeof value.datafrom == 'string') {
            value.datafrom = [value.datafrom];
            value.price = [value.price];
          }
          output.push(value);
        }
      });
      res.render('item', {
        title: item.name,
        item: item,
        rooms: output
      })
    }
  }

});

module.exports = router;