import getUser from "./UserServ.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_EXPIRY, JWT_SECRET } from "../Config/serverConfig.js";

async function signInServ(authDetails){

    const email = authDetails.email;
    const plainPassword = authDetails.password;

    // check the user exists or not 
    const user = await getUser(authDetails);
    console.log(user);
    if(!user){
        throw new Error("User has no account yet");
    }

    // if user exists then check credientials:

    const isPasswordCorrect = await bcrypt.compare(plainPassword,user.password);
    if(!isPasswordCorrect){
        throw new Error("Incorrect passsword");
    }

    // if password is correct then return the json web token;

    const token = jwt.sign({email : user.email,id: user._id},JWT_SECRET,{
        expiresIn: JWT_EXPIRY
    });

    console.log("Token is",token);
    return token;
};

export default signInServ;