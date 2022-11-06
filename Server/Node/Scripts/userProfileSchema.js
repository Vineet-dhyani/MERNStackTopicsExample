import mongoose from "mongoose";

const userProfileSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    userId:{
        type:mongoose.SchemaTypes.ObjectId, //here ont-to-one relatinship model
        ref:"User",                         //providing user collection ref 
        required:true,                       //here we are using normalization form
    }
})
export default mongoose.model("profile",userProfileSchema);