import User from "../Schema/UserSchema.js";

async function getUserRepo(authDetails){
    const email = authDetails.email;
    const response = await User.findOne({email : email});
    if(!response){
        return null;
    }
    return response;
}

async function createUserRepo(userDetails){
    try {
        const newUser = await User.create({
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            email: userDetails.email,
            password: userDetails.password,
        });
        console.log("newUser ",newUser);
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error("Problem with DB, try again later");
    }    
}


export {getUserRepo,createUserRepo};