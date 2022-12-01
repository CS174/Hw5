var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('public/htdocs/login.html', {root: '.'});

});

router.get('/createAccount', function(req, res, next) {
  res.sendFile('public/htdocs/createAccount.html', {root: '.'});

});

router.get('/loginVulnerable', function(req, res, next) {
  res.sendFile('public/htdocs/loginVulnerable.html', {root: '.'});

});

module.exports = router;
