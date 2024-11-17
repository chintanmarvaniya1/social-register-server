const MEMBER = require("../../models/member.model.js")
const FAMILY = require("../../models/family.model.js")

const addFamily = require("../familyServices/addfamily.service.js");
const updateMember = require("../memberServices/updatemember.service.js") 

const addMember = async (body) => {
    let missingFields;
    let requiredFields;
    if (body.reletion === "self") {
        requiredFields = ['firstname', 'middlename', 'surname', 'mobile', 'photo'];
        missingFields = requiredFields.filter(field => !body[field]).map(field => field.charAt(0).toUpperCase() + field.slice(1));;
        var DBObject = {
            FIRST_NAME: body.firstname,
            MIDDLE_NAME: body.middlename,
            SURNAME: body.surname,
            PHOTO: body.photo,
            RELATION: "self",
            MOBILE_NO: body.mobile,
        }

        if (missingFields.length > 0) {
            return {
                status: 400,
                message: `Invalid Input. Missing fields: ${missingFields.join(', ')}`
            };
        }
        const memberRecord = await MEMBER.findOne({ MOBILE_NO: body.mobile });
        if (memberRecord) {
            return {
                status: 400,
                message: 'User Already Exist with given Mobile Number'
            };
        }

        const newUser = new MEMBER(DBObject);
        await newUser.save();
        if (newUser) {
            const addFamilyResponse = await addFamily(newUser.id);
            if (addFamilyResponse.status === 200) {
                const updateMemberResponse = await updateMember(newUser.id,addFamilyResponse.userID);
                if(updateMemberResponse.status === 200){
                    return {
                        status:updateMemberResponse.status,
                        Message:`User & Family Created Successfully`,
                        userID:newUser.id,
                    }
                }else{
                    return{
                        status: addFamilyResponse.status,
                        message:addFamilyResponse.message
                    }
                }
            } else {
                return{
                    status: addFamilyResponse.status,
                    message:addFamilyResponse.message
                }
            }           
        } else {
            return {
                status: 500,
                message: 'Failed to Register User'
            };
        }
    } else {
        /*
            enter the details and also update the HOF details
        */
    }



    return {
        status: 500,
        message: "Something went Wrong",
    }

};

module.exports = addMember;