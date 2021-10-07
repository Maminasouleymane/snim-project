const express = require("express");
const router = new express.Router();
const mysql = require("mysql");
const connection = require("../db/connection");
const moment = require("moment");

//* affiche les données correspondantes  à la liaison SNIM/SML

router.get("/laison_sml_somelec", (req, res) => {
  let sql = `SELECT * FROM snim_somelec `;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.send(results);
  });
});

// * ajoute des données  à la table snim_somelec

router.post("/add_liaison", async (req, res) => {
  const date = moment().format("DD/MM/YYYY");
  const liaison = req.body.map((obj) => {
    const { consomateur, ead, erd, eaf, erf, EA, ER } = obj;
    return [
      date,
      consomateur,
      parseInt(ead),
      parseInt(erd),
      parseInt(eaf),
      parseInt(erf),
      parseInt(EA),
      parseInt(ER),
    ];
  });

  try {
    let sql = `insert into snim_somelec values ? `;
    connection.query(sql, [liaison], (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      res.status(201).send("les données  ont été enregistréés avec succeés");
    });
  } catch (e) {
    res.status(500).send(e);
    console.error(e);
  }
});

module.exports = router;
