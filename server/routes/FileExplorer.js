const express = require("express");
const router = express.Router();
const isValidPath = require("../middlewares/FileExplorerValidation");
const {getFilesFromPath} = require("../controllers/FileExplorercontroller");

router.get("/getFilesFromPath", isValidPath, getFilesFromPath);


module.exports = router;


