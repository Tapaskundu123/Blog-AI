
import jwt from 'jsonwebtoken'
import { UserInfo } from '../models/Blog.model';
import { Comment } from '../models/comment.model';
export const LoginAdmin= async(req,res)=>{
   
    const {email, password}= req.body;

    try{
        
    if(email!==process.env.ADMIN_EMAIL){
        return res.status(404)
                  .json({success:true, message:"Invalid Email"})
    }
    if(password!==process.env.ADMIN_PASSWORD){
        return res.status(404)
                  .json({success:true, message:"Invalid Password"})
    }

    const jwtToken= jwt.sign({email},process.env.JWT_SECRET_KEY);

    console.log(jwtToken);
    
    return res.status(200)
              .cookie('Token',jwtToken,{secure:true,httpOnly:false})
              .json({success:true, message:"Admin Logged in Successfully"})

}

catch(error){
        return res.status(500)
                  .json({success:false, message:error.message})
}
}
// admin dashboard to see all blogs 
export const getAllBlogsAdmin= async(req,res)=>{
    try{
        const blogs= await UserInfo.find({}).sort({createdAt:-1});

        res.json({success:true, blogs})
    }
    catch(err){
        return res.status(500)
                  .json({success:false, message:err.message})
    }

}
   // get all comments

 export const getAllComments= async(req,res)=>{
    
    try {
        
        const comments= await Comment.find({}).populate('blog').sort({createdAt: -1});

        if(!comments){
            return res.status(200)
                      .json({success:true, message:"Coments not found"})
        }
        res.json({success:true, comments});

    } catch (error) {
         return res.status(500)
                   .json({success:false, message:err.message})
    }
}

//get dashboard data

export const getADashboardData= async(req,res)=>{


    try {
        const recentBlogs= await UserInfo.find({}).sort({createdAt: -1});
        const countBlogs= await recentBlogs.countDocuments();
        const comments= await Comment.find({}).sort({createdAt: -1});
        const countComment= await comments.countDocuments();

        const drafts= await UserInfo.find({isPublished:false}).countDocuments(); 
      
        const dashboardData= {
          countBlogs,countComment,drafts
        }

        res.json({success:true, dashboardData})

    } catch (error) {
        return res.status(500)
                   .json({success:false, message:err.message})
    }
}