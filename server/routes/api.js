const express = require('express');
const router = express.Router();
const pool = require("../database").pool;


/* GET home page. */
router.post('/create', async function(req, res, next) {
    // NEED TO CHECK IF EMAIL EXISTS OR NOT BEFORE PROCEEDING
    const body = req.body;
    const answers = {
        q1: body.q1,
        q2: body.q2,
        q3: body.q3,
        q4: body.q4,
        q5: body.q5,
        q6: body.q6,
        q7: body.q7,
        q8: body.q8,
        q9: body.q9,
        q10: body.q10,
    }
    console.log(body)
    const sql = `INSERT INTO users (email, name, password, answers) VALUES ('${body.email}', '${body.name}', '${body.password}', '${JSON.stringify(answers)}');`

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
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
