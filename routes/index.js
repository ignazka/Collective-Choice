// requires router function of express
const router = require("express").Router();

//usage of router for index
//GET
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

//POST

router.post("/signup", async (req, res, next) => {
  const newUser = req.body;
  //setting up salt
  //hash password
  //create user in MongoDB
  res.redirect("/", { userData });
});

router.post("/login", async (req, res, next) => {
  const userData = req.body;
  //get data from Database
  //compare password
  res.redirect("/");
});

module.exports = router;
