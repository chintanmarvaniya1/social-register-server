const express = require("express");
const cors = require('cors');

const {statusAPI,authAPI} = require("./routers/index.js")
const responseFormatter = require('./middleware/responseFormatter');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api",statusAPI);
app.use(responseFormatter);
app.use("/api/auth",authAPI);

module.exports = app;