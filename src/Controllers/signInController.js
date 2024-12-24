import signInServ from "../Services/signInserv.js";

async function signIn(req,res){
    try {
        const response = await signInServ(req.body);
        res.cookie('authToken' , response.token, {
            httpOnly : true,
            maxAge : 1000 * 60 * 60 * 24 * 7 // 1 week
        });

        return res.status(200).json({
            success: true,
            data: response
        });
    } catch (error) {
        console.log("Controller error", error.message);
        if(error.message == "User not found in db"){
            return res.status(400).json({
                success: false,
                message: "User not found in db",
                error: error
            });
        }
        else if(error.message == "Incorrect passsword"){
            return res.status(400).json({
                success: false,
                message: "Incorrect Password",
            });
        }
        else if(error.message == "User has no account yet"){
            return res.status(400).json({
                success: false,
                message: "User has not account yet",
                error: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message: "Fail to login from server side",
            error: error
        });
    }
};

export default signIn;