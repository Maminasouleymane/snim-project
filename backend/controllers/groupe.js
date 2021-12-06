const moment = require("moment");
const db = require("../models");
const Groupe = db.Groupe;

exports.create = (req, res) => {
  const groupe = req.body;

  Groupe.bulkCreate(groupe)
    .then((data) => {
      res.send("données enregistrées avec succès");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the auxiliair.",
      });
    });
};

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
