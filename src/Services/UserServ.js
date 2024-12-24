import {getUserRepo} from "../Repositories/UserRepo.js";

async function getUser(authDetails){
    try {
        const res = await getUserRepo(authDetails);
        console.log("res is",res)
        if(!res){
            throw new Error("User has no account yet");
        }
        return res;
    } catch (error) {
        console.log(error.message);
        if(error.message == "User not found in db"){
            throw {message : "User not found in db", statusCode : 400};
        }
        else if(error.message == "User has no account yet"){
            throw new Error("User has no account yet");
        }
        else throw {message : "Internal service error from service layer", statusCode: 500};
    }
};

export default getUser;