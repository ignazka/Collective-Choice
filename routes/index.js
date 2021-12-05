// requires router function of express
const router = require("express").Router();
//requier Models
const User = require("../models/user.model");
const Comment = require("../models/comment.model");

//usage of router for index
//GET
router.get("/", async (req, res, next) => {
    const users = await User.find().populate("comment")
    res.render("index", {users});
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
  const newUserData = req.body;
  //setting up salt
  //hash password
  //create user in MongoDB
  const newUser = await User.create(newUserData);
  res.redirect("/");
});

router.post("/login", async (req, res, next) => {
  const userData = req.body;
  //get data from Database
  //compare password
  res.redirect("/");
});

module.exports = router;
