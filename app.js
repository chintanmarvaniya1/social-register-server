const express = require("express");
const cors = require('cors');

const {statusAPI} = require("./routers/index.js")
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api",statusAPI);

module.exports = app;