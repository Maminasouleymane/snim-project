const moment = require("moment");
const db = require("../models");
const Operation = db.Operation;
const date = moment().format("DD/MM/YYYY");

exports.create = (req, res) => {
  const { op1, op2, op3 } = req.body;

  const operation = {
    date,
    op1,
    op2,
    op3,
  };

  Operation.create(operation)
    .then((data) => {
      res.send("données enregistrées avec succès");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Operation.",
      });
    });
};

exports.findAll = (req, res) => {
  Operation.findAll()
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
