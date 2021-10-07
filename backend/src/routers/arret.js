const connection = require("../db/connection");
const express = require("express");
const moment = require("moment");
const router = new express.Router();

// * affiche les données correspondantes  à chaque arréts

router.get("/arret_imprevue", (req, res) => {
  let sql = `SELECT * FROM arret_imp`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.send(results);
    console.log(results);
  });
});

// * ajoute des donnees  à la table arret_imp

router.post("/ajouter_arret", (req, res) => {
  const date = moment().format("DD/MM/YYYY");
  const {
    groupe,
    defaut,
    codeDefaut,
    typeDefaut,
    section,
    dateDebut,
    dateFin,
    dureeHM,
    duree,
  } = req.body;

  try {
    let sql = `insert into arret_imp values (
        "${date}",
        "${groupe}",
        "${defaut}",
        "${codeDefaut}",
        "${typeDefaut}",
        "${section}",
        "${dateDebut}",
        "${dateFin}",
        "${dureeHM}",
        "${duree}")`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      res.status(201).send("l'arrét a été enregistré avec succeés");
    });
  } catch (e) {
    res.status(500).send(e);
    console.log(e);
  }
});

module.exports = router;
