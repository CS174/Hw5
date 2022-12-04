const mysql = require('mysql');
const {MYSQLUSERNAME, MYSQLPASSWORD, MYSQLPORT} = require("./Config");

// Init statements
const createdb = `CREATE DATABASE IF NOT EXISTS CS174`;
const dropUserTable = `DROP TABLE IF EXISTS CS174.users;`
const dropAnswersTable = `DROP TABLE IF EXISTS CS174.answers;`
const createUserTable = `CREATE TABLE CS174.users
(
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    PRIMARY KEY (id)
);`

const createAnswersTable = `CREATE TABLE CS174.answers
(
    id INTEGER,
    q1 VARCHAR(255),
    q2 VARCHAR(255),
    q3 VARCHAR(255),
    q4 VARCHAR(255),
    q5 VARCHAR(255),
    q6 VARCHAR(255),
    q7 VARCHAR(255),
    q8 VARCHAR(255),
    q9 VARCHAR(255),
    q10 VARCHAR(255),
    FOREIGN KEY (id) REFERENCES users(id)
);`

const con = mysql.createConnection({
    host: "localhost",
    user: MYSQLUSERNAME,
    password: MYSQLPASSWORD,
    port: MYSQLPORT
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    console.log("Running initialize commands...")
    console.log(createdb);
    // Create db
    con.query(createdb,null,() => {
        // Drop user Table
        console.log(dropUserTable);
        con.query(dropUserTable, null, () => {
            // Drop answers table
            console.log(dropAnswersTable);
            con.query(dropAnswersTable, null, () => {
                // Create user table
                console.log(createUserTable);
                con.query(createUserTable, null, () => {
                    // Create answers table
                    console.log(createAnswersTable);
                    con.query(createAnswersTable, null, () => {
                        console.log("Successfully initialized database.");
                        process.exit(0)
                    });
                });
            });
        });
    });
});