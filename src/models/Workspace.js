const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  notebooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notebook",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Workspace = mongoose.model("Workspace", workspaceSchema);
module.exports = Workspace;
