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

    const updateMember = await MEMBER.findByIdAndUpdate(id, body , { new: true });
    if (updateMember) {
        return {
            status: 200,
            userID: updateMember.id,
            message: 'Member Updted successfully'
            };
    } else {
        return {
            status: 500,
            message: 'Failed to Update Member Contact Admin'
        };
    }
}

module.exports = updateMember;