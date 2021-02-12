const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const path = require("path");
const thisFile = path.basename(__filename);
const Scroll = require("../models/Scroll");
const Notebook = require("../models/Notebook");
const { isAuthenticated } = require("../middlewares/auth");
const decodeFirebaseToken = require("../utils/decodeFirebaseToken");

router.get("/test", (req, res) => {
  res.json({ success: true, message: `Router ${thisFile}  Working!` });
});

router.post(
  "/",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    const notebook = await Notebook.findById(req.body.notebook_id);
    if (!notebook) {
      err = new Error("Notebook Not Found");
      err.statusCode = 404;
      err.name = "NotFound";
      throw err;
    }
    const scroll = await Scroll.create({
      name: req.body.name,
      notes: [],
      vid_link: req.body.vid_link,
      owner: req.user,
      notebook: notebook._id,
      workspace: notebook.workspace,
    });
    res.status(201).json(scroll);
  })
);

router.get(
  "/:_id",
  asyncHanlder(async (req, res) => {
    const firebase_id = decodeFirebaseToken(req.headers.firebase_token);
    let user = User.findByFirebaseId(firebase_id);
    const scroll = Scroll.findById(req.params._id);
    if (!scroll) {
      err = new Error("Scroll Not Found");
      err.statusCode = 404;
      err.name = "NotFound";
      throw err;
    }

    if (!scroll.public && scroll.owner.toString() !== user._id.toString()) {
      err = new Error("Scroll is not public");
      err.statusCode = 401;
      err.name = "AuthError";
      throw err;
    }

    res.status(200).json(scroll);
  })
);

router.delete(
  "/:_id",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    const scroll = Scroll.findById(req.params._id);
    if (!scroll) {
      err = new Error("Scroll Not Found");
      err.statusCode = 404;
      err.name = "NotFound";
      throw err;
    }
    if (scroll.owner.toString() !== req.user._id.toString()) {
      err = new Error("Not Authorized to delete it");
      err.statusCode = 401;
      err.name = "AuthError";
      throw err;
    }
    await Scroll.deleteOne({ _id: req.params._id });
    res.status(204).send();
  })
);

router.patch(
  "/:_id",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    const scroll = Scroll.findById(req.params._id);
    if (!scroll) {
      err = new Error("Scroll Not Found");
      err.statusCode = 404;
      err.name = "NotFound";
      throw err;
    }
    if (scroll.owner.toString() !== req.user._id.toString()) {
      err = new Error("Not Authorized to edit it");
      err.statusCode = 401;
      err.name = "AuthError";
      throw err;
    }
    if (req.body.name && req.body.name.length > 0) {
      scroll.name = req.body.name;
    }
    if (!(typeof req.body.public === "undefined" || req.body.public === null)) {
      scroll.public = req.body.public;
    }
    await scroll.save();
    res.status(200).send();
  })
);
module.exports = router;
