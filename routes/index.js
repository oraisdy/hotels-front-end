// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/list');
    // res.send('你来了！');
  });
  app.use('/item', require('./item'));
  app.use('/list', require('./list'));
};