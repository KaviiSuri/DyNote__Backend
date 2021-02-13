const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  scroll: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Scroll",
    required: true,
  },
  start_time: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
  },
});

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
