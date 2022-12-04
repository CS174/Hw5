const express = require('express');
const router = express.Router();
const pool = require("../database");


/* GET home page. */
router.post('/create', async function(req, res, next) {
    const body = req.body;
    console.log(body)
    let sql = 'SELECT * FROM inventory';

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Inventory received via pool.');

            connection.release();
        });
    });
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
