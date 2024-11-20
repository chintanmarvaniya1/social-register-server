const serverStatus = require("./statusController/serverstatus.controller.js");
const sendOTP = require("./authControllers/sendOtp.controller.js");
const verifyOTP = require("./authControllers/verifyOtp.controller.js");
const addMember = require("./memberControllers/addmember.controller.js");
const updateMember = require("./memberControllers/updatemember.controller.js");
const addFamily = require("./familyController/addfamily.controller.js");
const updateFamily = require("./familyController/updatefamily.controller.js");

module.exports  = {
    serverStatus,
    sendOTP,
    verifyOTP,
    addMember,
    updateMember,
    addFamily,
    updateFamily
};