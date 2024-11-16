const OTP = require("../../models/OTP.model.js");
//const sendOtpfunction = require("../../utils/sendOTP");
const otpGenerator = require("otp-generator")

const sendOtp = async (mobile) => {
    if (mobile === undefined) {
        return {
            status: 400,
            message: 'Mobile Number is not Provided'
        };
    }

    const otp = otpGenerator.generate(6, { lowerCaseAlphabets :false,upperCaseAlphabets :false,specialChars :false });

    await OTP.deleteMany({ mobile });

    const newOtp = new OTP({ mobile, otp });
    await newOtp.save();
    
    //const otpSent = await sendOtpfunction(mobile, otp);
    
    if (newOtp) {
        return {
            status: 200,
            message: 'OTP sent successfully'
        };        
    } else {
        return {
            status: 500,
            message: 'Failed to send OTP'
        };
        
    }

    return {
        status: 500,
        message: "Something went Wrong",
    }

};

module.exports = sendOtp;