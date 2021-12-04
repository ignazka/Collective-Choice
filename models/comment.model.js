const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  downvotes: Number,
  upvotes: Number,
});

module.exports = model("Comment", commentSchema);
