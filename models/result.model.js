const { Schema, model } = require("mongoose");

const resultSchema = new Schema({
  upvotes: Number,
  downvotes: Number,
});

module.exports = model("Result", resultSchema);
