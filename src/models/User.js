const mongoose = requrie("mongoose");

const userSchema = new mongoose.Schema({
  firebase_id: {
    required: true,
    unique: true,
    index: true,
  },
  username: {
    required: true,
    type: String,
  },
  workspaces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
    },
  ],
});

userSchema.statics.findByFirebaseId = function findByFirebaseId(fid) {
  return this.findOne({ firebase_id: fid });
};

const User = mongoose.model("User", userSchema);
module.exports = User;
