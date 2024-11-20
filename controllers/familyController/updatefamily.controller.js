const updateFamily = require("../../service/familyServices/updatefamily.service.js")
const updateFamilyController = async (req, res) => {
    try {
        const id = req.params.id;
        const {village,cast} = req.body;
        const body = {
            ...(village && { VILLAGE: village }),
            ...(cast && { CAST: cast })
        };
        const response = await updateFamily(id,body)
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

module.exports = updateFamilyController;