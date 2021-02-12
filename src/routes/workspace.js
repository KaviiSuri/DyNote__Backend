const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const path = require("path");
const { isAuthenticated } = require("../middlewares/auth");
const thisFile = path.basename(__filename);
const Workspace = require("../models/Workspace");

router.get("/test", (req, res) => {
  res.json({ success: true, message: `Router ${thisFile}  Working!` });
});

router.post(
  "/",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    if (!req.body.name || req.body.name.length == 0) {
      err = new Error("username is required");
      err.statusCode = 400;
      err.name = "BadRequest";
      throw err;
    }
    // create workspace
    const workspace = await Workspace({
      name: req.body.name,
      notebooks: [],
      owner: req.user,
    });

    // add to owner
    req.user.workspaces.push(workspace._id);
    await req.user.save();
    res.status(201).json(workspace);
  })
);

router.get(
  "/:_id",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    // does the current user own this?
    if (!req.user.workspaces.includes(req.params._id)) {
      const err = new Error("Unauthorized to view this workspace");
      err.statusCode = 401;
      err.name = "AuthError";
      throw err;
    }
    // find workspace
    const workspace = await Workspace.findById(req.params._id).populate(
      "notebooks",
      "name _id"
    );
    res.status(200).json(workspace);
  })
);

router.delete(
  "/:_id",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    if (!req.user.workspaces.includes(req.params._id)) {
      const err = new Error("Unauthorized to view this workspace");
      err.statusCode = 401;
      err.name = "AuthError";
      throw err;
    }
    // delete workspace
    await Workspace.deleteOne({ _id: req.params._id });
    res.status(204).send();
  })
);

module.exports = router;
