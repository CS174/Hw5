const express = require('express');
const router = express.Router();
const pool = require("../database").pool;


/* GET home page. */
router.post('/create', async function(req, res, next) {
    const body = req.body;
    console.log(body)
    const sql = `INSERT INTO users (email, name, password) VALUES ('${body.email}', '${body.name}', '${body.password}');`

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            const sql_answers = `INSERT INTO answers (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) 
            VALUES ('${body.q1}', '${body.q2}', '${body.q3}', '${body.q4}', '${body.q5}', 
            '${body.q6}', '${body.q7}', '${body.q8}', '${body.q9}', '${body.q10}',)`;
            connection.query(sql, (err, result) => {
                res.send(result);
                connection.release();
            })
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
