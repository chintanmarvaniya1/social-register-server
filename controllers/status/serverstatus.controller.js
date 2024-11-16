const getserverstatus = require('../../service/status/getserverstatus.js')

const serverStatusController = async (req, res) => {
    try {
        response = await getserverstatus(req);
        if (response.status == 200) {
            return res.status(200).json({
                success: "Success",
                Messgae: `Server is Running on ${process.env.PORT}`,
                API : [response.Data]
            });
        }else if(response.status == 500){
            return res.status(200).json({
                success: "Fail",
                Messgae: `Server is not Running`,
            });
        }
    } catch (error) {
        console.log(error);
        
    }
};

module.exports = serverStatusController;