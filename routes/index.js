// requires router function of express 
const router = require('express').Router();


//usage of router for index
router.get("/", (req, res, next) => {
    res.render("index")
})

module.exports = router