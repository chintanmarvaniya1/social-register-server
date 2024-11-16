const express = require("express");
const cors = require('cors');

//const {statusAPI,memberAPI,authAPI} = require("./routes/index.js")
//const responseFormatter = require('./middleware/responseFormatter');
const app = express();

app.use(express.json());
app.use(cors());

//app.use("/api",statusAPI);
//app.use(responseFormatter);
//app.use("/api",memberAPI);
//app.use("/api",authAPI)

module.exports = app;