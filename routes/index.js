var express = require("express");
var router = express.Router();
const DateTime = require("luxon");
let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(DateTime.DATETIME_MED),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString(DateTime.DATETIME_MED),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages });
});
router.get("/new", (req, res, next) => {
  res.render("form", { title: "Form" });
});

router.post("/new", (req, res, next) => {
  messages = [...messages, req.body];
  res.redirect("/");
});

module.exports = router;
