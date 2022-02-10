const express = require('express');
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const FileExplorer = require("./routes/FileExplorer");


app.listen(PORT, () => console.log("Server is running"));

app.use("/api/file-explorer", FileExplorer );