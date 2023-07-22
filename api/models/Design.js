const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DesignSchema = new Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  board: String,
  designNumber: Number,
  title: String,
  description: String,
  price: Number,
  photos: [String],
});

const DesignModel = mongoose.model("Design", DesignSchema);

module.exports = DesignModel;
