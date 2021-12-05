// requires router function of express
const router = require("express").Router();
// requires bcryptjs for password encryption
const bcrypt = require('bcrypt');
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
  const {username, email, password} = req.body;
  // const hasMissingCredentials = !email || !password || !username; //Error handling //later
  //setting up salt
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  //hash password
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  //create user in MongoDB
  const newUserData = {
    "username": username,
    "email": email,
    "password":hashedPassword
  }
  const newUser = await User.create(newUserData)
  res.redirect("/");
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  //get data from Database
  //compare password
  res.redirect("/");
});

module.exports = router;
