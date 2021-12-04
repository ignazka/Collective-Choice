//requirements
const express = require("express");
// for OS independent path construction
const path = require("path");
// require handlebars for dynamic views
const hbs = require("hbs");
// require .env for port setup
require("dotenv").config();

// creating instance of express server and config
const app = express();
app.use(express.json());
app.use(express.urlencoded());

// Normalizes the path to the views folder
app.set("views", path.join(__dirname, ".", "views"));

// Sets the view engine to handlebars
app.set("view engine", "hbs");
// Handles access to the public folder
app.use(express.static(path.join(__dirname, ".", "public")));
hbs.registerPartials(__dirname + "/views/partials");

// reference of port from .env or 3000
const { PORT } = process.env;

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Router handling
const index = require("./routes/index");
app.use("/", index);

const mongoose = require("mongoose");
// ℹ️ Sets the MongoDB URI for our app to have access to it.
const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost/collective-choice";

async function mongoConnect() {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongo!");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
}
mongoConnect();
