const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "24111995",
  database: "snim",
});

module.exports = connection;
