const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


const MEMBER = {
    FAMILY_ID : {
        type : mongoose.Schema.ObjectId,
        ref : 'FAMILY'
    },
    FIRST_NAME :{type: String,required: true},
    MIDDLE_NAME :{type: String,required: true},
    SURNAME:{type: String,required: true},
    PHOTO:{type: String,required: true},
    PASSWORD:{type: String},
    RELATION:{type: String,required: true},
    DOB:{type: String},
    MARITIAL_STATUS:{type: String},
    MATERNAL_SURNAME:{type: String},
    EDUCATION:{type: String},
    BLOOD_GROUP:{type: String},
    MOBILE_NO:{type: String,required: true,unique: true},
    OCCUPATION:{type: String},
    OCCUPATION_ADDRESS:{type: String},
    RESIDENTIAL_ADDRESS:{type: String},
    VARIFICATION_STATUS:{type:Boolean, default:false}
}
const memberSchema = new Schema(MEMBER,{timestamps:true})


module.exports = mongoose.model('MEMBER', memberSchema);
