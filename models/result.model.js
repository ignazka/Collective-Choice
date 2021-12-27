const { Schema, model } = require("mongoose");

const resultSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  totalVotes: Number, //only from signedUp users | is calculated with every get req of /comments
  upvotes: Number,
  downvotes: Number,
  anonTotalVotes: Number, //only anon Users, bots included | also calculated
  anonUpvotes: Number,
  anonDownvotes: Number,
  isBot: Number,  // is included in anonTotalVotes
  timestampsUpvotes: [Date],
  timestampsDownvotes: [Date],
});

module.exports = model("Result", resultSchema);
