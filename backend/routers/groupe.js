const groupeControlller = require("../controllers").groupe;
const express = require("express");
const router = new express.Router();

// console.log(arretControlller.create);
router.get("/groupe", groupeControlller.findAll);
router.post("/groupe", groupeControlller.create);

module.exports = router;
