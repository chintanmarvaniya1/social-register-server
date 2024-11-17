const FAMILY = require("../../models/family.model.js")
const addFamily = async (id) => {
    const familyRecord = await FAMILY.findOne({ HOF: id });
    if (familyRecord) {
        return {
            status: 400,
            message: 'USER is Already HOF of One Family'
        };
    }
    const newFamily = new FAMILY({
        HOF: id,
        MEMBERLIST: [id]
    });
    await newFamily.save();

    if (newFamily) {
        return {
            status: 200,
            userID: newFamily.id,
            message: 'User Registerd successfully'
        };

    }else {
        return {
            status: 500,
            message: 'Failed to Register Family Contact Admin'
        };
    }

    // if (newFamily) {
    //     const UpdatedFamily = await MEMBER.findByIdAndUpdate(newUser.id, { FAMILY_ID: newFamily.id }, { new: true });
    //     if (UpdatedFamily) {
    //         return {
    //             status: 200,
    //             userID:UpdatedFamily.
    //             message: 'User Registerd successfully'
    //         };
    //     } else {
    //         return {
    //             status: 500,
    //             message: 'Failed to Register Family Contact Admin'
    //         };
    //     }
    // } else {
    //     return {
    //         status: 500,
    //         message: 'Failed to Register Family Contact Admin'
    //     };
    // }
}

module.exports = addFamily;