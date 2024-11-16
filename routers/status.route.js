const express = require("express");
const statusRouter = express.Router();
const {serverStatus} = require("../controllers/index.js")


statusRouter.route('/status').get(serverStatus);


module.exports = statusRouter;