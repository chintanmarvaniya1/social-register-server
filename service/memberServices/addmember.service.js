const MEMBER = require("../../models/member.model.js")
const FAMILY = require("../../models/family.model.js")

const addFamily = require("../familyServices/addfamily.service.js");
const updateMember = require("../memberServices/updatemember.service.js");
const updateFamily = require("../familyServices/updatefamily.service.js");

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
            const familybody = {
                isHOF : true,
                id:newUser.id,
                memberList:[newUser.id],
                cast:body.cast,
                village:body.village
            }
            const addFamilyResponse = await addFamily(familybody);
            if (addFamilyResponse.status === 200) {
                const updateMemberResponse = await updateMember(newUser.id,{FAMILY_ID:addFamilyResponse.userID});
                if(updateMemberResponse.status === 200){
                    return {
                        status:updateMemberResponse.status,
                        message:`User & Family Created Successfully`,
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
        requiredFields = ['firstname', 'middlename', 'surname', 'mobile', 'relation', 'family_Id'];
        missingFields = requiredFields.filter(field => !body[field]).map(field => field.charAt(0).toUpperCase() + field.slice(1));;
        var DBObject = {
            FIRST_NAME: body.firstname,
            MIDDLE_NAME: body.middlename,
            SURNAME: body.surname,
            PHOTO: body.photo,
            RELATION: body.relation,
            MOBILE_NO: body.mobile,
            FAMILY_ID:body.family_Id,
            VARIFICATION_STATUS:body.VARIFICATION_STATUS,
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

        if(newUser){
            const familyData = await FAMILY.findOne({ _id: body.family_Id });
            if(familyData){
                var memberList = familyData.MEMBERLIST;
                memberList.push(newUser.id);
                const updatedFamily = await updateFamily(body.family_Id,{MEMBERLIST:memberList});
                if (updatedFamily.status === 200) {
                    return{
                        status:updatedFamily.status,
                        message:`User Created & Family Updated Successfully`,
                        userID:newUser.id,
                    }
                } else {
                    return{
                        status: updatedFamily.status,
                        message:updatedFamily.message
                    }
                }
            }else{
                return {
                    status: 400,
                    message: 'Family Not found for User'
                };
            }
        }else{
            return {
                status: 500,
                message: 'Failed to Register Member'
            };
        }

    }



    return {
        status: 500,
        message: "Something went Wrong",
    }

};

module.exports = addMember;