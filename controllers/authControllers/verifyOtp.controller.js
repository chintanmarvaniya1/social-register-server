const verifyOtp = require("../../service/authServices/verifyotp.service.js");

const verifyOtpController = async (req, res) => {
    try {
        const response = await verifyOtp(req.body)
        if (response.status === 200) {
            res.success(response.message, 200, "Success", response.userID);
        } else if (response.status === 400) {
            res.error(response.message, 400, "Invalid Input")
        } else {
            res.error(response.message, 500, "Server Error")
        }
    } catch (error) {
        res.error(error.message, 500, "Server Error", error.stack)
    }
}

module.exports = verifyOtpController;