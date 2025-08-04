import mongoose from "mongoose";

const UserInfoSchema= new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    
    subTitle:{
        type:String,
        required:true
    },
    
    blogDescription:{
        type:String,
        required:true
    },
    blogCategory:{
        type:String,
        required:true
    },
    Image:{
        type:File,
        required:true
    },
    isPublished:{
        type:Boolean,
        required:true
    },
},{timestamps:true});

export const UserInfo= mongoose.model('blog',UserInfoSchema);

