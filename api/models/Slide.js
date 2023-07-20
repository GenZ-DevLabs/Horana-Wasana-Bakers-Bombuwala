const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SlideSchema = new Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  photos: { type: [String], required: true },
});

const SlideModel = mongoose.model("Slide", SlideSchema);

module.exports = SlideModel;
