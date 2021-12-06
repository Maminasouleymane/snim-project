const moment = require("moment");
const db = require("../models");
const Auxilier = db.Auxilier;

const date = moment().format("DD/MM/YYYY");

exports.create = (req, res) => {
  const { obb1, obb2, spedm } = req.body;

  const auxilier = {
    date,
    obb1,
    obb2,
    spedm,
  };

  Auxilier.create(auxilier)
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
  Auxilier.findAll()
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
