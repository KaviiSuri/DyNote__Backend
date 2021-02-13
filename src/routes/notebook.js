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
    
    //create notebook
    const notebook=await Notebook({
        name:req.body.name,
        scrolls=[],
        owner=req.user,
        workspace=Workspace.findById(req.params._id),
      });

    Workspace.findById(req.params.id).notebook.push(notebook._id);
    res.status(201).json(notebook);
  })
);

router.get(
  "/:_id",
    isAuthenticated,
    asyncHandler(async (req, res) => {
      // does the current user own this?
      if (!req.user.workspace.notebook.include(req.params._id)) {
        const err = new Error("Unauthorized to view this notebook");
        err.statusCode = 401;
        err.name = "AuthError";
        throw err;
      }
      if(!notebook.name || notebook.name.length==0)
        {
          const err = new Error("Notebook is not available");
          err.statusCode = 404;
          err.name = "Not Found";
          throw err;
        }
      // find notebook
      const notebook = await Notebook.findById(req.params._id).populate(
        "scroll",
        "name _id"
      );
      res.status(200).json(notebook);
    })
  );

  
module.exports = router;
