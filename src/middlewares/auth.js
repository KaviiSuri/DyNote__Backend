const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const decodeFirebaseToken = require("../utils/decodeFirebaseToken");

const isAuthenticated = asyncHandler(async (req, res, next) => {
  const idToken = req.headers.firebase_token;

  if (!idToken) {
    const error = new Error("firebase_token header is required");
    error.statusCode = 403;
    error.name = "AuthError";
    throw error;
  }
  const firebase_id = await decodeFirebaseToken(idToken);
  const user = await User.findByFirebaseId(firebase_id);
  if (user) {
    req.user = user;
    next();
  }

  const error = new Error("User Not Found");
  error.name = "AuthError";
  error.statusCode = 404;
  throw error;
});

module.exports = {
  isAuthenticated,
};
