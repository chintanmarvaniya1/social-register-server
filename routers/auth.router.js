const express = require("express");
const authRouter = express.Router();
const {sendOTP} = require("../controllers/index.js")


authRouter.route('/send-otp').post(sendOTP);


module.exports = authRouter;