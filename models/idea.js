const mongoose = require("mongoose");

// Schema Setup
const ideaSchema = new mongoose.Schema({
  name: String,
  Phone: Number,
  PIN: Number,
  Year: Number,
  idea: String,
  createdAt: { type: Date, default: Date.now },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
});

module.exports = mongoose.model("idea", ideaSchema);
