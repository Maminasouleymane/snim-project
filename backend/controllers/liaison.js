const moment = require("moment");
const db = require("../models");
const Liaison = db.Liaison;

exports.create = (req, res) => {
  const liaison = req.body;

  Liaison.bulkCreate(liaison)
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
  Liaison.findAll()
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
