//REQUIREMENTS
const express = require("express");
// for OS independent path construction
const path = require("path");
// require handlebars for dynamic views
const hbs = require("hbs");
// require .env for mongodb and session
require("dotenv").config();
// requierements for sessions and cookies
const session = require("express-session")
const MongoStore = require("connect-mongo")
// gets data from env, for cleaner code later
const { NODE_ENV, SESS_SECRET, MONGODB_URL, PORT } = process.env;


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

//SESSION CONFIGURATION
// are we on a production site?
const isProduction = NODE_ENV === 'production'
// cookie configuration
app.set("trust proxy", 1);
app.use(
  session({
    // secret is the "password" for session to read your hashed cookie
    secret: SESS_SECRET,
    // re save the cookie any time there is a change in it
    resave: true,
    // dont save the cookie till there is something attatched to it
    saveUninitialized: false,
    cookie: {
      // config the policies for cookies coming or not from the same site as the server
      sameSite: isProduction ? "none" : "lax",
      // only allow cookies from https when running un production
      secure: isProduction,
      // make cookies unable to be read by the client with js
      httpOnly: true,
      // how long the cookie should last
      maxAge: 6000000,
    },
    // save the cookie in mongo db
    store: MongoStore.create({
      mongoUrl: MONGODB_URL,
      // time to live, how long we should save this cookie
      ttl: 60 * 60 * 24,
    }),
  })
  );
  
  //ROUTER HANDLING
  const index = require("./routes/index");
  app.use("/", index);
  
  const mongoose = require("mongoose");
  // ℹ️ Sets the MongoDB URI for our app to have access to it.

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
  // start server
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
  