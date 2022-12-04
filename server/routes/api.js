var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/create', function(req, res, next) {
    const body = req.body;
    console.log(body)
    // res.redirect("/")
});

router.post('/login', function(req, res, next) {
    const body = req.body;
    console.log(body)
    // res.redirect("/")
});

router.post('/update', function(req, res, next) {
    const body = req.body;
    console.log(body)
    // res.redirect("/")
});
module.exports = router;
