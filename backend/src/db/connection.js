const mysql = require("mysql");
const fs = require("fs");
require('dotenv').config();

// ! working locally
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "24111995",
  database: "snim",
});

// // switching to env varialbles 
// const database = mysql.createConnection({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });


module.exports = connection;
