const connection = require("../db/connection");
const express = require("express");
const moment = require("moment");
const router = new express.Router();

// * affiche les données correspondantes a chaque auxilier

router.get("/get_auxilier", (req, res) => {
  let sql = `SELECT * FROM auxilier order by date`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.send(results);
    console.log("auxiliaire data ", results);
  });
});

// * ajout des données  à la table  auxilier

router.post("/add_auxilier", (req, res) => {
  const { OBB1, OBB2, SPEDM } = req.body;
  let opr1 = parseFloat(OBB1);
  let opr2 = parseFloat(OBB2);
  let opr3 = parseFloat(SPEDM);
  const date = moment().format("DD/MM/YYYY");

  try {
    let sql = `insert into auxilier values (
             "${date}",
             ${opr1},
             ${opr2},
             ${opr3}
              )`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      res.status(201).send("les informations ont été enregistré avec succeés");
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
