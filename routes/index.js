module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/list/1');
  });
  app.use('/item', require('./item'));
  app.use('/list', require('./list'));
  app.use('/keyword', require('./search'));
};