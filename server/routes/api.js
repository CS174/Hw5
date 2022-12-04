var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/createAccount', function(req, res, next) {
    const body = req.body;
    console.log(body)
    res.redirect("/")
});

module.exports = router;
