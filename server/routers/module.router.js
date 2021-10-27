const express = require("express");
const moduleController = require("../controllers/module.controller");

let router = express.Router();

router.get("/:lang_id", async function (req, res) {
  moduleController.getAll(req, res);
});

module.exports = router;
