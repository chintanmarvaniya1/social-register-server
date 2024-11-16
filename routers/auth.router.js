const express = require("express");
const authRouter = express.Router();
const {sendOTP,verifyOTP} = require("../controllers/index.js")


authRouter.route('/send-otp').post(sendOTP);
authRouter.route('/verify-otp').post(verifyOTP);


module.exports = authRouter;