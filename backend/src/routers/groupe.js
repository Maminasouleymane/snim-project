const express = require("express");
const router = new express.Router();
const connection = require("../db/connection");
const moment = require("moment");

// * affiche les données correspondantes à chaque groupe

router.get("/get_groupe", (req, res) => {
  let sql = `SELECT * FROM groupe`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.send(results);
  });
});

// * ajoute des  données  à la table groupe

router.post("/add_groupe", (req, res) => {
  const date = moment().format("DD/MM/YYYY");

  const groupes = req.body.map(
    ({ groupe, ep, hmarche, np, huile, comb, ap, ai }) => {
      return [
        date,
        groupe,
        parseFloat(ep),
        parseFloat(hmarche),
        parseInt(np),
        parseInt(huile),
        parseInt(comb),
        parseFloat(ap),
        parseFloat(ai),
      ];
    }
  );
  try {
    let sql = `insert into groupe values ?`;
    connection.query(sql, [groupes], (error, results, fields) => {
      if (error) {
        if (error.code === "ER_DUP_ENTRY") {
          return res.send("duplication des données");
        }
      }

      res
        .status(201)
        .send("les données des groupes ont été enregistréés avec succeés");
    });
  } catch (e) {
    res.status(500).send(e);
    console.log(e);
  }
});

module.exports = router;
