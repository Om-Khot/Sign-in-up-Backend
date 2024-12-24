import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        require: [true,"First Name should be provided"],
        trim:true
    },
    lastName : {
        type : String,
        require: [true,"Last Name should be provided"],
        trim:true
    },
    email : {
        type : String,
        require : [true,"Email should be provided"],
        unique : true
    },
    password : {
        type : String,
        require : [true,"Password should be provided"],
    }
},{
    timestamps: true
});

UserSchema.pre('save', async function(){
    const hasshedPassword = await bcrypt.hash(this.password , 10);
    this.password = hasshedPassword;
});

const User = mongoose.model('User',UserSchema);

export default User;