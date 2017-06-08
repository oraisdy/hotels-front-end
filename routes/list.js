var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  var list = JSON.parse('[{ "name":"John", "description":"Hello world", "distance":30, "city":"New York"},{ "name":"John", "description":"Hello world", "distance":30, "city":"New York"},{ "name":"John", "description":"Hello world", "distance":30, "city":"New York"}]');

  res.render('list', {
    title: 'list',
    list: list,
  });
});

module.exports = router;