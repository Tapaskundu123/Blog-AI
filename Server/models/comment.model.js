import mongoose from "mongoose";

const CommentSchema= new mongoose.Schema({

    blog:{
        type:mongoose.Schema.type.ObjectId,
        ref:'blog',
        required:true
    },
    name:{
        type:"String",
        required:true
    },
    content:{
        type:"String",
        required:true
    },
    isApproved:{
        type:"String",
        required:true
    }
},{timestamps:true});


export const Comment= mongoose.model('Comment',CommentSchema);
