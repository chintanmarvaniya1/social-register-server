const express = require("express");
const memberRouter = express.Router();
const {addMember} = require("../controllers/index.js")


memberRouter.route('/add-member').post(addMember);


module.exports = memberRouter;