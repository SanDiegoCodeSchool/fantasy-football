'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  // router.get('/', server.loopback.status());

  server.set('view engine', 'ejs');

  server.get('/', function(req, res) {
    res.render('index');
  });
  server.use(router);
};
