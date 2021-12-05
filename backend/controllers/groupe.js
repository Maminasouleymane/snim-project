const moment = require("moment");
const db = require("../models");
const Groupe = db.Groupe;
// const Op = db.Sequelize.Op;
// const date = moment().format("DD/MM/YYYY");
// Create and Save a new Tutorial
exports.create = (req, res) => {
  const groupe = req.body;
  // Save auxilier in the database
  Groupe.bulkCreate(groupe)
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

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Groupe.findAll()
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
