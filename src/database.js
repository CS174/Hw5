const mysql = require('mysql');
const { MYSQLUSERNAME, MYSQLPASSWORD } = require('../config/Config')


const con = mysql.createConnection({
    host: "localhost",
    user: MYSQLUSERNAME,
    password: MYSQLPASSWORD
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

let sql = "CREATE DATABASE CS174";


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});