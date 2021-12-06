const groupeControlller = require("../controllers").groupe;
const express = require("express");
const router = new express.Router();

router.get("/groupe", groupeControlller.findAll);
router.post("/groupe", groupeControlller.create);

module.exports = router;
