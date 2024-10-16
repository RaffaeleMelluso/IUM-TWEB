var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to My Class' });
});

/* SECOND ROUTE ADDED BY ME*/
router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Welcome to COM3504' });
});
module.exports = router;
