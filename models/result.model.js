const { Schema, model } = require("mongoose");

const resultSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  totalVotes: Number,
  upvotes: Number,
  downvotes: Number,
});

module.exports = model("Result", resultSchema);
