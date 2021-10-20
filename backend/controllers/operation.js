const moment = require("moment");
const db = require("../models");
const Operation = db.Operation;
// const Op = db.Sequelize.Op;
const date = moment().format("DD/MM/YYYY");
// Create and Save a new Tutorial
exports.create = (req, res) => {
  const { op1, op2, op3 } = req.body;
  console.log(req.body);
  // console.log("im d ", date);
  // Validate request
  // if (!date) {
  //   res.status(400).send({
  //     message: "Content can not be empty!",
  //   });
  //   return;
  // }

  // Create a Tutorial
  const operation = {
    date,
    op1,
    op2,
    op3,
  };

  // Save auxilier in the database
  Operation.create(operation)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Operation.",
      });
    });
};

// Retrieve all Tutorials from the database.
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
