const serverStatus = require("./statusController/serverstatus.controller.js");
const sendOTP = require("./authControllers/sendOtp.controller.js");

module.exports  = {
    serverStatus,
    sendOTP
};