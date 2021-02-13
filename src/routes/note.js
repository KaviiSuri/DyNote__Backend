const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const path = require("path");
const thisFile = path.basename(__filename);
const Note = require("../models/Note");
const Scroll = require("../models/Scroll");
const { isAuthenticated } = require("../middlewares/auth");

router.get("/test", (req, res) => {
  res.json({ success: true, message: `Router ${thisFile}  Working!` });
});

router.post(
  "/",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    if (!req.body.name || req.body.name.length == 0) {
      err = new Error("Note name is required");
      err.statusCode = 400;
      err.name = "BadRequest";
      throw err;
    }

    const scroll = await Scroll.findById(req.body.scroll_id);
    if (!scroll) {
      err = new Error("Scroll Not Found");
      err.statusCode = 404;
      err.name = "NotFound";
      throw err;
    }
    //create notes
    const note = await Note.create({
      name: req.body.name,
      scroll: req.body.scroll_id,
      start_time: req.body.start_time,
      content: req.body.content,
    });
    // const scroll = await Scroll.findById(req.body.scroll_id);
    scroll.notes.push(note._id);
    await scrolls.save();
    res.status(201).json(note);
  })
);

router.get(
  "/:_id",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    // does the current user own this?
    const note = await Note.findById(req.params._id);
    if (!note) {
      const err = new Error("Note is not available");
      err.statusCode = 404;
      err.name = "Not Found";
      throw err;
    }
    res.status(200).json(notebook);
  })
);

router.delete(
  "/:_id",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    // query 1 - find notebook
    const note = await Note.findById(req.params._id);
    if (!note) {
      err = new Error("Note Not Found");
      err.statusCode = 404;
      err.name = "NotFound";
      throw err;
    }

    const scroll = await Scroll.findById(note.scroll);
    if (scroll.owner.toString() !== req.user._id.toString()) {
      err = new Error("Not Authorized to delete it");
      err.statusCode = 401;
      err.name = "AuthError";
      throw err;
    }
    // query 2 - remvoe from parent scroll
    scroll.notes = await scroll.notes.filter(
      (id) => id.toString() !== note._id.toString()
    );
    await scroll.save();
    // query 3 - delete the notebook
    await Note.deleteOne({ _id: req.params._id });

    res.status(204).send();
  })
);

router.patch(
  "/:_id",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    const { name, content, start_time } = req.body;
    const note = await Note.findById(req.params._id);
    if (!note) {
      err = new Error("Note Not Found");
      err.statusCode = 404;
      err.name = "NotFound";
      throw err;
    }

    const scroll = await Scroll.findById(note.scroll);
    if (scroll.owner.toString() !== req.user._id.toString()) {
      err = new Error("Not Authorized to edit it");
      err.statusCode = 401;
      err.name = "AuthError";
      throw err;
    }
    if (name && name.length > 0) {
      note.name = name;
    }
    if (content) {
      note.content = content;
    }
    if (start_time) {
      note.start_time = start_time;
    }
    await note.save();
    res.status(200).json(note);
  })
);

module.exports = router;
