const { Router } = require("express");
const router = Router();

const { Type } = require("../db");

router.get("/", (req, res) => {
  Type.findAll()
    .then((result) => res.json(result))
    .catch((err) => console.log("typeR: Error 1, ", err));
});

module.exports = router;
