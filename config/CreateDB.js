const mysql = require('mysql');
const {MYSQLUSERNAME, MYSQLPASSWORD, MYSQLPORT, DATABASE} = require("./Config");

// Init statements
const createdb = `CREATE DATABASE IF NOT EXISTS CS174`;
const usedb = `use cs174`
const dropUserTable = `DROP TABLE IF EXISTS CS174.users`;
const createUserTable = `CREATE TABLE CS174.users
(
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    answers JSON,
    PRIMARY KEY (id)
)`;

var con = mysql.createConnection({
    host: "localhost",
    user: MYSQLUSERNAME,
    password: MYSQLPASSWORD,
    database: DATABASE,
    port: MYSQLPORT
});
con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    console.log("Running initialize commands...")
    console.log(createdb);
    // Create db
    con.query(createdb, null,() => {
        // Drop user Table
        console.log(usedb)
        con.query(usedb, null, ()=>{
            console.log(dropUserTable);
        con.query(dropUserTable, null, () => {
            // Create user table
            console.log(createUserTable);
            con.query(createUserTable, null, () => {
                // Create answers table
                    console.log("Successfully initialized database.");
                    process.exit(0);
            });
        });
        })
        
    });
});






