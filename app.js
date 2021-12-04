//requirements
const express = require("express")
// for OS independent path construction
const path = require("path");
// require handlebars for dynamic views
const hbs = require('handlebars')
// require .env for port setup
require('dotenv').config()


// creating instance of express server and config
const app = express()
app.use(express.json())
app.use(express.urlencoded())


// Normalizes the path to the views folder
app.set("views", path.join(__dirname, ".", "views"));


// Sets the view engine to handlebars
app.set("view engine", "handlebars");
// Handles access to the public folder
app.use(express.static(path.join(__dirname, ".", "public")));

// reference of port from .env or 3000
const {PORT} = process.env

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))