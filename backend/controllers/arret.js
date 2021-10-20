const moment = require("moment");
const db = require("../models");
const Arret = db.Arret;
// const Op = db.Sequelize.Op;
const date = moment().format("DD/MM/YYYY");
// Create and Save a new Tutorial
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

  // Save auxilier in the database
  Arret.create(arret)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the auxilier.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Arret.findAll()
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
