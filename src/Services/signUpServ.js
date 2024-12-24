import { createUserRepo, getUserRepo } from "../Repositories/UserRepo.js";

async function signUpServ(userDetails){

    try {
        const user = await getUserRepo(userDetails);
        if(!user){
            const newUser = await createUserRepo(userDetails);
            return newUser;
        }
        else{
            throw new Error("User with this account already exist");
        }
        
    } catch (error) {
        console.log("error message from serv", error.message);
        if(error.message == "Problem with DB, try again later"){
            throw new Error(error.message);
        }
        else if(error.message == "User with this account already exist"){
            throw new Error(error.message);
        }
        else {
            throw new Error("Problem in internal server error");
        }        
    }
    
};

export default signUpServ; 