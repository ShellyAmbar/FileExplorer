const express = require("express");
const router = express.Router();
const isValidPath = require("../middlewares/FileExplorerValidation");
const FileExplorerController = require("../controllers/FileExplorercontroller");

router.get("/getFilesFromPath", isValidPath, FileExplorerController.getFilesFromPath);


module.exports = router;


