var client = require("../DATA/twilio.config.js")

async function sendOtp(mobile, otp) {
    try {
        await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: '',
            to: mobile
        });
        console.log(`OTP ${otp} sent to ${mobile}`);
        return true;
    } catch (error) {
        console.error("Failed to send OTP:", error.message);
        return false;
    }
}

module.exports = sendOtp;