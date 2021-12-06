const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");
const conf = require("./config.json");
const { sequelize } = require("../models");
const { development, test, production } = conf;

module.exports = db = {};

initialize();

async function initialize() {
  // create db if not exist
  const { username, password, database, host } = conf.development;
  const connection = await mysql.createConnection({
    user: username,
    password,
    host,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, username, password, {
    dialect: "mysql",
  });

  await sequelize.sync();
}
