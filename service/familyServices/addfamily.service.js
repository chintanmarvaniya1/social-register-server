const FAMILY = require("../../models/family.model.js")
const addFamily = async (body) => {
    const familyRecord = await FAMILY.findOne({ HOF: body.id });
    if (familyRecord) {
        return {
            status: 400,
            message: 'USER is Already HOF of One Family'
        };
    }
    let newFamily;
    if(body.isHOF){
        newFamily = new FAMILY({
            HOF: body.id,
            MEMBERLIST: body.memberList
        });
    }else{
        newFamily = new FAMILY({
            MEMBERLIST: body.memberList
        });
    }
    
    await newFamily.save();

    if (newFamily) {
        return {
            status: 200,
            userID: newFamily.id,
            message: 'Family Registerd successfully'
        };

    }else {
        return {
            status: 500,
            message: 'Failed to Register Family Contact Admin'
        };
    }
}

module.exports = addFamily;