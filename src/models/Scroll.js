const mongoose = require("mongoose");

const scrollSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "notes",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  vid_link: {
    type: String,
    required: true,
  },
  notebook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notebook",
    required: true,
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
  public: {
    type: Boolean,
    default: false,
  },
});

const Scroll = mongoose.model("Scroll", scrollSchema);
module.exports = Scroll;
