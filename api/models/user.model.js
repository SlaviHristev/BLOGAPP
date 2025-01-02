import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    img:{
        type:String,
    },
    savedPosts:{
        type:[String],
        default:[]
    },
}, {timestamps: true});

export default mongoose.model("User", userSchema);
