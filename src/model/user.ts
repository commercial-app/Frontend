import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true
        },
        email:{
            type:String,
            unique:true,
            required:true
        },
        password:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true,
        collection:'user'
    }
)

const User = models.User || mongoose.model("User", userSchema)

export default User