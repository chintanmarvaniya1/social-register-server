const twilio = require('twilio');

const accountSid = process.env.TWILIOACCOUNTSID
const authToken = process.env.TWILIOAUTHTOKEN;
const twilioPhoneNumber = process.env.TWILIOPHONENUMBER;

const client = twilio(accountSid, authToken);

module.exports = client;