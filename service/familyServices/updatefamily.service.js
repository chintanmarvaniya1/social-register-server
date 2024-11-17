const FAMILY = require("../../models/family.model.js")

const updateFamily = async (id,body) => {
    
    if(!id){
        return {
            status: 400,
            message: `Invalid Input for Updating Family. Missing fields: User ID`
        };
    }
    if(!body){
        return {
            status: 400,
            message: `Invalid Input for Updating Family. Missing fields: New Field`
        };
    }

    const UpdatedFamily = await FAMILY.findByIdAndUpdate(id, body , { new: true });
    if (UpdatedFamily) {
        return {
            status: 200,
            userID: UpdatedFamily.id,
            message: 'Family Details Updated Successfully'
            };
    } else {
        return {
            status: 500,
            message: 'Failed to Update Family'
        };
    }
}

module.exports = updateFamily;