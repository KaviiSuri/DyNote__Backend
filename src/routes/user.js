const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const path = require("path");
const { isAuthenticated } = require("../middlewares/auth");
const User = require("../models/User");
const decodeFirebaseToken = require("../utils/decodeFirebaseToken");
const thisFile = path.basename(__filename);

router.get("/test", (req, res) => {
  res.json({ success: true, message: `Router ${thisFile}  Working!` });
});

// Get user by IdToken
router.get("/", isAuthenticated, (req, res) => {
  res.status(200).json(req.user);
});

// Create User
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const idToken = req.headers.firebase_token;
    const firebase_id = decodeFirebaseToken(idToken);
    let user = User.findByFirebaseId(firebase_id);
    // user already exists
    if (user) {
      // err = new Error("User already exists, try signing in");
      // err.statusCode = 409;
      // err.name = "AuthError";
      // throw err;
      await user.populate("workspaces", "name _id").execPopulate();
      res.status(200).json(user);
    }
    if (!req.body.username || req.body.username.length == 0) {
      err = new Error("username is required");
      err.statusCode = 400;
      err.name = "BadRequest";
      throw err;
    }
    // create new user
    user = new User({
      firebase_id: firebase_id,
      username: req.body.username,
      workspaces: [],
    });

    await user.save();
    res.status(201).json(user);
  })
);

router.delete(
  "/",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    const _id = req.user._id;
    await User.deleteOne({ _id });
    res.status(204).send();
  })
);
module.exports = router;
