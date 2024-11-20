const statusAPI = require("./status.route.js");
const authAPI = require("./auth.router.js");
const memberAPI = require('./member.router.js');
const familyAPI = require("./family.route.js");

module.exports = {
    statusAPI,
    authAPI,
    memberAPI,
    familyAPI
}