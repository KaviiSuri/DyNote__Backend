const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const path = require("path");
const thisFile = path.basename(__filename);
const Note=require("../models/Note");
const Scroll=require("../models/Scroll");
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
      scrolls:req.body.scroll_id,
      // start_time: 
      content: req.body.content,
    });
    const scroll = await Scroll.findById(req.body.scroll_id);
    scrolls.notes.push(note._id);
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
    const note = Note.findById(req.params._id);
    if (!note) {
      err = new Error("Note Not Found");
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
    // query 2 - remvoe from parent scroll
    const scroll = Scroll.findById(note.scroll);
    scroll.notes = scroll.notes.filter(
      (id) => id.toString() !== note._id.toString()
    );
    await scroll.save();
    // query 3 - delete the notebook
    await Note.deleteOne({ _id: req.params._id });

    res.status(204).send();
  })
);


module.exports = router;
