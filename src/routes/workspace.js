const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const path = require("path");
const thisFile = path.basename(__filename);

router.get("/test", (req, res) => {
  res.json({ success: true, message: `Router ${thisFile}  Working!` });
});

module.exports = router;
