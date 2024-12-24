import signUpServ from "../Services/signUpServ.js";

async function signUp(req,res){
    try {
        console.log("Req body" , req.body);
        const newUser = await signUpServ(req.body);
        res.status(201).json({
            success: true,
            message: "Successfully created the new user",
            data : newUser
        });
    } catch (error) {
        console.log("error from controller",error.message);
        if(error.message == "Problem with DB, try again later"){
            return res.status(500).json({
                success:false,
                error : error
            });
        }
        else if(error.message == "Problem in internal server error"){
            return res.status(500).json({
                success:false,
                error : error
            });
        }
        else if(error.message == "User with this account already exist"){
            return res.status(400).json({
                success : false,
                error : error.message
            });
        }
        else return res.status(500).json({
            message: "Internal service error from controller",
            error : error
        });
    }
}

export default signUp;