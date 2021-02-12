const mongoose = requrie("mongoose");

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
    requried: true,
  },
  vid_link: {
    type: String,
    required: true,
  },
  notebook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notebook",
    requried: true,
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
});

const Scroll = mongoose.model("Scroll", scrollSchema);
module.exports = Scroll;
