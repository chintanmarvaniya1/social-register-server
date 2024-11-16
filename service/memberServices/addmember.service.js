const MEMBER = require("../../models/member.model.js")
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
        const memberRecord = await MEMBER.findOne({ MOBILE_NO:body.mobile });
        if (memberRecord) {
            return {
                status: 400,
                message: 'User Already Exist with given Mobile Number'
            };
        }
    
        const newUser = new MEMBER(DBObject);
        await newUser.save();
    
        if (newUser) {

            /*
                Need to make entry in the Family DB
                get the Object ID 

                Update the current User
            */
            return {
                status: 200,
                message: 'User Registerd successfully'
            }; 
        } else {
            return {
                status: 500,
                message: 'Failed to Register User'
            };
        }
    }else{
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