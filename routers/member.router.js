const express = require("express");
const memberRouter = express.Router();
const {addMember,updateMember} = require("../controllers/index.js")


memberRouter.route('/add-member').post(addMember);
memberRouter.route('/update-member/:id').put(updateMember)


module.exports = memberRouter;