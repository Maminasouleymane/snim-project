const operationControlller = require("../controllers").operation;
const express = require("express");
const router = new express.Router();

router.get("/operation", operationControlller.findAll);
router.post("/operation", operationControlller.create);

module.exports = router;
