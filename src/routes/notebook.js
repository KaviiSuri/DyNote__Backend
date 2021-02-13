const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const path = require("path");
const thisFile = path.basename(__filename);
const Notebook=require("../models/Notebook");
const {isAuthenticated}=require("../middlewares/auth");
const Workspace = require("../models/Workspace");


router.get("/test", (req, res) => {
  res.json({ success: true, message: `Router ${thisFile}  Working!` });
});

router.post(
  "/", 
  isAuthenticated,
  asyncHandler(async,(req,res)=>
  {
    if (!req.body.name || req.body.name.length == 0) {
      err = new Error("Notebook name is required");
      err.statusCode = 400;
      err.name = "BadRequest";
      throw err;
    }
    // does the current user own a workspace with this id
    if (!req.user.workspaces.includes(req.body.workspace_id)) {
      const err = new Error("Unauthorized to view such workspace");
      err.statusCode = 401;
      err.name = "AuthError";
      throw err;
    }
    //create notebook
    const notebook=await Notebook.create({
        name:req.body.name,
        scrolls: [],
        owner: req.user,
        workspace: req.body.workspace_id,
    });
    const workspace = await Workspace.findById(req.body.workspace_id);
    workspace.notebooks.push(notebook._id);
    await workspace.save()
    res.status(201).json(notebook);
  })
);

router.get(
  "/:_id",
  isAuthenticated,
  asyncHandler(async (req, res) => {
    // does the current user own this?
    const notebook = await (await Notebook.findById(req.params._id)).populate("scrolls", "name _id public vid_link");
    if(!notebook)
    {
      const err = new Error("Notebook is not available");
      err.statusCode = 404;
      err.name = "Not Found";
      throw err;
    }
    if (notebook.owner.toString() !== req.user._id.toString()) {
      const err = new Error("Unauthorized to view this notebook");
      err.statusCode = 401;
      err.name = "AuthError";
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
    const notebook = Notebook.findById(req.params._id);
    if (!notebook) {
      err = new Error("Notebook Not Found");
      err.statusCode = 404;
      err.name = "NotFound";
      throw err;
    }
    if (notebook.owner.toString() !== req.user._id.toString()) {
      err = new Error("Not Authorized to delete it");
      err.statusCode = 401;
      err.name = "AuthError";
      throw err;
    }
    // query 2 - remvoe from parent workspace
    const workspace = Workspace.findById(notebook.workspace);
    workspace.notebooks = workspace.notebooks.filter(id => id.toString() !== notebook._id.toString())
    await workspace.save()
    // query 3 - delete the notebook
    await Notebook.deleteOne({_id: req.params._id});

    res.status(204).send();
  })
);
  
module.exports = router;
