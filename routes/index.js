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
router.get("/comments", async (req, res, next) => {
  const commentsInDatabase = await Comment.find()
  console.log(commentsInDatabase[0].upvote+"")
  res.render("comments", {commentsInDatabase});
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
  try{
    const { email, password } = req.body;
    //get data from Database
    const foundUser = await User.findOne({email})
    //compare password
    const isVerified = await bcrypt.compare(password, foundUser.password)
    // if user is verified cookie will be changed and saved in database:Sessions and browser
    if(isVerified){
      req.session.currentUser = foundUser.username;   
     }
    res.redirect("/");
  }
  
  catch(error){
    console.error(`An error occured while trying to login: ${error}`)

  }
});

router.post('/logout', async (req, res, next) =>{
  try {
    req.session.destroy(() => {
      res.redirect("/")
    })
  } catch(error){
 console.error(`An Error occured while trying to logout ${error}`)
  }
})


module.exports = router;
