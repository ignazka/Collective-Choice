const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  isUpvote: Boolean,    //shows if comment is generally an up or downvote
  downvotes: Number,
  upvotes: Number,
});

module.exports = model("Comment", commentSchema);
