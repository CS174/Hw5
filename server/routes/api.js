const express = require('express');
const router = express.Router();
const pool = require("../database").pool;


/* GET home page. */
router.post('/create', async function(req, res, next) {
    // NEED TO CHECK IF EMAIL EXISTS OR NOT BEFORE PROCEEDING
    const body = req.body;
    
    const sql = `INSERT INTO users (email, name, password, answers) VALUES ('${body.email}', '${body.name}', '${body.password}', "[${body.answers}]");`

    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(`select * from users where email ="${body.email}"`,(e,r)=>{
            if(e)throw e
            if(r[0]==null){
                connection.query(sql,null, (err, result) => {
                    if (err) throw err;
                    console.log(result);
                    res.send({success:true});
                });
            }
            else{
                res.send({success:false});
            }
            connection.release();
        })
        
    });
    // res.redirect("/")
});

router.post('/login', function(req, res, next) {
    const body = req.body;
    console.log(body)
    const sql = `SELECT * FROM users WHERE email='${body.email}' AND password='${body.password}'`;
    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result)
            if(result[0]==null){
                res.send({"success":false})
                console.log("wrong information")
            }
            else{
                res.send({"success":true})
                console.log("login succesful")
            }
        });
    });
});

router.get('/profile/:email', (req,res) =>{
    // const urlParams = new URLSearchParams(window.location.search)
    // console.log(urlParams.get("email"))
    // console.log(queryString)
    const email = req.params.email
    pool.getConnection((err,con)=>{
        if(err) throw err
        con.query(`select name, email, answers from users where email !="${email}"`,(err,result)=>{
            if(err) throw err

            res.send({data:result})
        })
    })
})
router.get('/:email', (req,res) =>{
    // const urlParams = new URLSearchParams(window.location.search)
    // console.log(urlParams.get("email"))
    // console.log(queryString)
    const email = req.params.email
    pool.getConnection((err,con)=>{
        if(err) throw err
        con.query(`select name, email, answers from users where email ="${email}"`,(err,result)=>{
            if(err) throw err

            res.send({data:result})
        })
    })
})
router.post('/update', function(req, res, next) {
    const body = req.body;
    console.log(body)
    // res.redirect("/")
});
module.exports = router;
