const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DesignBoardSchema = new Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  photos: [String],
});

const DesignBoardModel = mongoose.model("DesingBoard", DesignBoardSchema);

module.exports = DesignBoardModel;
