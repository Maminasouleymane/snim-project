const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");
const conf = require("./config.json");
const { sequelize } = require("../models");
const { development, test, production } = conf;
console.log("im conf", development);
//
// const creation = async () => {
//   await mysql
//     .createConnection({
//       user: development.username,
//       password: development.password,
//     })
//     .then(async () => {
//       await sequelize
//         .query(`CREATE DATABASE IF NOT EXISTS ${development.database};`)
//         .then(() => {
//           // Safe to use sequelize now
//           const sequelize = new Sequelize(
//             development.database,
//             development.username,
//             development.password,
//             {
//               host: "localhost",
//               dialect:
//                 development.dialect /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//             }
//           );
//           try {
//             sequelize.authenticate();
//             console.log("Connection has been established successfully.");
//           } catch (err) {
//             console.error("Unable to connect to the database:", error);
//           }
//         });
//     });
// };

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const { username, password, database, host } = conf.development;
  console.log(username, password);
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

  // init models and add them to the exported db object
  // db.User = require('../users/user.model')(sequelize);

  // sync all models with database
  await sequelize.sync();
}
