const mongoose = requrie("mongoose");

const notebookSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  scrolls: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Scroll",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
});

const Notebook = mongoose.model("Notebook", notebookSchema);
module.exports = Notebook;
