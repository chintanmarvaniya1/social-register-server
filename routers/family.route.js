const express = require("express");
const familyRouter = express.Router();
const {addFamily} = require("../controllers/index.js")


familyRouter.route('/add-family').post(addFamily);


module.exports = familyRouter;