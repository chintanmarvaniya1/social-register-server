const serverStatus = require("./statusController/serverstatus.controller.js");
const sendOTP = require("./authControllers/sendOtp.controller.js");
const verifyOTP = require("./authControllers/verifyOtp.controller.js");

module.exports  = {
    serverStatus,
    sendOTP,
    verifyOTP
};