const mysql = require('mysql');
const { MYSQLHOST, MYSQLUSERNAME, MYSQLPASSWORD, MYSQLPORT, DATABASE } = require('../config/Config')


let pool = mysql.createPool({
    host     : MYSQLHOST,
    user     : MYSQLUSERNAME,
    password : MYSQLPASSWORD,
    database : DATABASE,
    port: MYSQLPORT,
    connectionLimit : 15,
});

exports.pool = pool;