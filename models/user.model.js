const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  comment: {type: Schema.Types.ObjectId, ref: "Comment"}
}); 
module.exports = model("User", userSchema);

// https://mongoosejs.com/docs/schematypes.html
