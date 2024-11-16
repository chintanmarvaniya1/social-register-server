const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


const OTP = {
    mobile: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, index: { "lastModifiedDate": 1 , "expireAfterSeconds": 1200 } } 
}
const otpSchema = new Schema(OTP,{timestamps:true})


module.exports = mongoose.model('OTP', otpSchema);