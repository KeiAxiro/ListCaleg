var express = require("express");
var router = express.Router();

router.get("/", async (req, res) => {
  res.render("landingpage", {
    title: "List Caleg",
  });
});

module.exports = router;
