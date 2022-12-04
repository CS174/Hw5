const mysql = require('mysql');
const { MYSQLUSERNAME, MYSQLPASSWORD, MYSQLPORT } = require('../config/Config')


const con = mysql.createConnection({
    host: "localhost",
    user: MYSQLUSERNAME,
    password: MYSQLPASSWORD,
    port: MYSQLPORT
})




export default async function query(sql, params) {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    const [results, ] = await con.execute(sql, params);

    return results;
}