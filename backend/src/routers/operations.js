const connection = require("../db/connection");
const express = require("express");
const moment = require("moment");
const router = new express.Router();

// * affiche les données correspondantes  à chaque operations

router.get("/get_operation", (req, res) => {
  let sql = `SELECT * FROM operation order by date`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.send(results);
    console.log(results);
  });
});

//* ajoute des donnees  à la table operation

router.post("/add_operation", (req, res) => {
  const { op1, op2, op3 } = req.body;
  let opr1 = parseInt(op1);
  let opr2 = parseInt(op2);
  let opr3 = parseInt(op3);
  const date = moment().format("DD/MM/YYYY");

  try {
    let sql = `insert into operation values (
             "${date}",
             ${opr1},
             ${opr2},
             ${opr3}
              )`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      res.status(201).send("l'operation a été enregistré avec succeés");
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
