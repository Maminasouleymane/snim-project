const groupeControlller = require("../controllers").groupe;
const express = require("express");
const router = new express.Router();

// console.log(arretControlller.create);
router.get("/displayGroupe", groupeControlller.findAll);
router.post("/addGroupe", groupeControlller.create);

module.exports = router;
