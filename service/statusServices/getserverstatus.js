const API = require("../../DATA/API.DATA.json")
const serverStatus = async (req, res) => {
    try{
        return {
            status:200,
            Data : [API],
        }
        
    }catch (error) {
        return {
            status: 500,
            data: error
        };
    }
};

module.exports = serverStatus;