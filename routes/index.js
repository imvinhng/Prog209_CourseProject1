var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.send('respond with an index resource');
});

/* GET home page. */
router.get('/internationals/index', function(req, res, next) {
  res.send('respond with a internationals index resource');
});

/* GET home page. */
router.get('/internationals', function(req, res, next) {
  res.send('respond with a internationals resource');
});




module.exports = router;
