const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main", { pageTitle: "test" });
});

module.exports = router;
