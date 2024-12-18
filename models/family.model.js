const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


const FAMILY = {
    VILLAGE: { type: String },
    HOF: {
        type: {
            type: mongoose.Schema.ObjectId,
            ref: 'MEMBER', 
            unique: true
        },
    },
    CAST: { type: String },
    MEMBERLIST: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'MEMBER'
        }
    ]
}
const familySchema = new Schema(FAMILY, { timestamps: true })


module.exports = mongoose.model('FAMILY', familySchema);
