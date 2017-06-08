var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  var item = JSON.parse('{ "name":"John", "description":"Hello world", "age":30, "city":"New York"}');

  res.render('item', {
    title:"item",
    item: item,
  });
});

module.exports = router;