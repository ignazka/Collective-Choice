// requires router function of express
const router = require("express").Router();
// requires bcryptjs for password encryption
const bcrypt = require("bcrypt");
//requier Models
const User = require("../models/user.model");
const Comment = require("../models/comment.model");

//usage of router for index
//GET
router.get("/", async (req, res, next) => {
    const user = req.session.currentUser;
    // get data from user, who is already logged in
    const findUser = await User.findOne({ username: user }).populate("comment");
    // // send userData to index hbs to use as partial data, if not logged, no hbs parameter
    if (user) {
        res.render("index", { user, findUser });
    } else {
        res.render("index");
    }
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
    try {
        const users = await User.find().populate("comment");
        res.render("comments", { users });
    } catch (error) {
        console.error(`An error occured while trying to login: ${error}`);
    }
});

//POST

router.post("/signup", async (req, res, next) => {
    const { username, email, password } = req.body;
    // const hasMissingCredentials = !email || !password || !username; //Error handling //later
    //setting up salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    //hash password
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create user in MongoDB
    const newUserData = {
        username: username,
        email: email,
        password: hashedPassword,
    };
    const newUser = await User.create(newUserData);
    res.redirect("/");
});

router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //get data from Database
        const foundUser = await User.findOne({ email });
        //compare password
        const isVerified = await bcrypt.compare(password, foundUser.password);
        // if user is verified cookie will be changed and saved in database:Sessions and browser

        if (isVerified) {
            req.session.currentUser = foundUser.username;
            res.redirect("/");
        } else {
            res.redirect("/login");
        }
    } catch (error) {
        console.error(`An error occured while trying to login: ${error}`);
    }
});

router.post("/create-comment", async (req, res, next) => {
    try {
        //new user just signed Up | User: "Till" writes a new comment.
        //New comment id will update tills comment reference in the database
        //get the content
        const { content, isUpvote } = req.body;
        //create new comment
        const newCommentDocument = await Comment.create({
            content: content,
            isUpvote: isUpvote,
        });
        // add newComment._id to new users comment.reference in database
        const updatedUser = await User.findOneAndUpdate(
            { username: req.session.currentUser },
            { comment: newCommentDocument._id },
            { new: true }
        );
        res.redirect("/comments");
    } catch (error) {
        console.error(
            `An Error occured while trying to create comment ${error}`
        );
    }
});

// user updates his comment
router.post("/edit-comment", async (req, res, next) => {
    try {
        const user = req.session.currentUser; //get current user
        const findUser = await User.findOne({ username: user }); //get current user from database
        const commentID = findUser.comment._id; //saves the comment id, linked to the user
        //updates the users comment content
        await Comment.findOneAndUpdate(
            { _id: commentID },
            { content: req.body.content }
        );
        res.redirect("/comments");
    } catch (error) {
        console.error(
            `An Error occured while trying to update your comment ${error}`
        );
    }
});

router.post("/delete-user", async (req, res, next) => {
    try {
        console.log("Start deletion of user: ", req.session.currentUser);
        const user = req.session.currentUser; //get current user
        console.log(user)
        const findUser = await User.findOne({ username: user });
        console.log('find user:', findUser)
        const commentID = await findUser.comment._id; //saves the comment id, linked to the user
        console.log('comment id is: ', commentID)
        await Comment.findOneAndDelete(
            { _id: commentID }
        );
        console.log("Comment deleted")
        await User.findOneAndDelete(
            { username: user }
        );
        console.log("User deleted")
        req.session.destroy(() => {
            res.redirect("/");    

        })
    } catch (error) {
        console.error(
            `An Error occured while trying to delete your Account ${error}`
        );
    }
});

router.post("/logout", async (req, res, next) => {
    try {
        req.session.destroy(() => {
            res.redirect("/");
        });
    } catch (error) {
        console.error(`An Error occured while trying to logout ${error}`);
    }
});


module.exports = router;
