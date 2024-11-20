const express = require("express");
const familyRouter = express.Router();
const {addFamily,updateFamily} = require("../controllers/index.js")


familyRouter.route('/add-family').post(addFamily);
familyRouter.route("/update-family").put(updateFamily);


module.exports = familyRouter;