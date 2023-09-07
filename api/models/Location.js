const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  location: String,
});

const LocationModel = mongoose.model("Location", LocationSchema);

module.exports = LocationModel;
