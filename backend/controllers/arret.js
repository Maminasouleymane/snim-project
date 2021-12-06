const moment = require("moment");
const db = require("../models");
const Arret = db.Arret;

const date = moment().format("DD/MM/YYYY");

exports.create = (req, res) => {
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

  const arret = {
    date,
    groupe,
    defaut,
    codeDefaut,
    typeDefaut,
    section,
    dateDebut,
    dateFin,
    dureeHM,
    duree,
  };

  Arret.create(arret)
    .then((data) => {
      res.send("données enregistrées avec succès");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the auxilier.",
      });
    });
};

exports.findAll = (req, res) => {
  Arret.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
