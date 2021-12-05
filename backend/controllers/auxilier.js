const moment = require("moment");
const db = require("../models");
const Auxilier = db.Auxilier;
// const Op = db.Sequelize.Op;
const date = moment().format("DD/MM/YYYY");
// Create and Save a new Tutorial
exports.create = (req, res) => {
  const { obb1, obb2, spedm } = req.body;
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
  const auxilier = {
    date,
    obb1,
    obb2,
    spedm,
  };

  // Save auxilier in the database
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

// Retrieve all Tutorials from the database.
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
