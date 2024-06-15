var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Test route */
router.get('/test', function(req, res, next) {
  res.send('Test Route!');
})

module.exports = router;
