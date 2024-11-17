const MEMBER = require("../../models/member.model.js")

const updateMember = async (id,body) => {
    
    if(!id){
        return {
            status: 400,
            message: `Invalid Input for Updating User. Missing fields: User ID`
        };
    }
    if(!body){
        return {
            status: 400,
            message: `Invalid Input for Updating User. Missing fields: New Field`
        };
    }

    const UpdatedFamily = await MEMBER.findByIdAndUpdate(id, body , { new: true });
    if (UpdatedFamily) {
        return {
            status: 200,
            userID: UpdatedFamily.id,
            message: 'User Registerd successfully'
            };
    } else {
        return {
            status: 500,
            message: 'Failed to Register Family Contact Admin'
        };
    }
}

module.exports = updateMember;