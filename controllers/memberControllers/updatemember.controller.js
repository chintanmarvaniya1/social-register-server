const updateMember = require("../../service/memberServices/updatemember.service.js")
const updateMemberController = async (req, res) => {
    try {
        const id = req.params.id;
        const {firstname,middlename,surname, mobile,photo,relation,dob,maritial_status,maternal_surname,education,blood_group,occupation,occupation_address,residential_address} = req.body;
        const body = {
            ...(firstname && { FIRST_NAME: firstname }),
            ...(middlename && { MIDDLE_NAME: middlename }),
            ...(surname && { SURNAME: surname }),
            ...(mobile && { MOBILE_NO: mobile }),
            ...(photo && { PHOTO: photo }),
            ...(relation && { RELATION: relation }),
            ...(dob && { DOB: dob }),
            ...(maritial_status && { MARITIAL_STATUS: maritial_status }),
            ...(maternal_surname && { MATERNAL_SURNAME: maternal_surname }),
            ...(education && { EDUCATION: education }),
            ...(blood_group && { BLOOD_GROUP: blood_group }),
            ...(occupation && { OCCUPATION: occupation }),
            ...(occupation_address && { OCCUPATION_ADDRESS: occupation_address }),
            ...(residential_address && { RESIDENTIAL_ADDRESS: residential_address })
        };
        const response = await updateMember(id,body)
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

module.exports = updateMemberController;