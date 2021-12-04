// requires router function of express
const router = require("express").Router();

//usage of router for index
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/login", (req, res, next) => {
  res.render("login");
});
router.get("/signup", (req, res, next) => {
  res.render("signup");
});
router.get("/info", (req, res, next) => {
  res.render("info");
});
router.get("/comments", (req, res, next) => {
  res.render("comments");
});

module.exports = router;
