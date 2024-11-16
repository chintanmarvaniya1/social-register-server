const OTP = require("../../models/OTP.model.js");

const verifyOtp = async (body) => {

    const requiredFields = ['firstname', 'middlename', 'surname', 'mobile', 'photo','OTP'];
    const missingFields = requiredFields.filter(field => !body[field]).map(field => field.charAt(0).toUpperCase() + field.slice(1));;

    if (missingFields.length > 0) {
        return {
            status: 400,
            message: `Invalid Input. Missing fields: ${missingFields.join(', ')}`
        };
    }

    const otpRecord = await OTP.findOne({ mobile:body.mobile, otp:body.OTP });
    if (!otpRecord) {
        return {
            status: 400,
            message: 'Unable to verify OTP. Please Re-send OTP'
        };
    }

    // const newUser = new USER({name, mobile });
    // await newUser.save();

    await OTP.deleteMany({ mobile:body.mobile });

    return {
        status: 200,
        message: "OTP verified and user created successfully",
    }

};

module.exports = verifyOtp;