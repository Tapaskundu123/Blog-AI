
import fs from 'fs'
import imagekit from '../DB/imageKit.js';
import { UserInfo } from '../models/Blog.model.js';
import { Comment } from '../models/comment.model.js';

export const BlogPost = async (req, res) => {
  try {
    const { title, subTitle, blogDescription, blogCategory, isPublished } = JSON.parse(req.body.blog);
    const Image = req.file;

    // Check if fields are provided
    if (!title || !subTitle || !blogDescription || !blogCategory) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Check if file is provided
    if (!Image) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    // Upload to ImageKit using buffer
    const response = await imagekit.upload({
      file: Image.buffer, // Use buffer instead of reading from disk
      fileName: Image.originalname, // Use originalname (not originalName)
      folder: "/blogs"
    });

    // Optimize image URL
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: 'auto' },
        { format: 'webp' },
        { width: '1280' }
      ]
    });

    // Save blog in DB
    await UserInfo.create({
      title,
      subTitle,
      blogDescription,
      blogCategory,
      Image: optimizedImageUrl,
      isPublished
    });

    res.json({ success: true, message: "Blog added successfully" });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const Allblogs= async(_,res)=>{

try{
    const AllBlogs= await UserInfo.find({isPublished:true});

    return res.status(200)
              .json({success:true, AllBlogs})
  
}
 catch(error){
    return res.status(500)
              .json({success:false, message:error.message})
 }
}


export const getBlogById = async(req,res)=>{

  try {
       const {blogId}= req.params;

       if(!blogId){
        return res.status(404)
                  .json({success:false, message:"blog not found"})
       }
      const blog= await UserInfo.findById(blogId);

      return res.status(200)
              .json({success:true, blog})
  } catch (error) {
     return res.status(500)
              .json({success:false, message:error.message})
  }
 
}

export const deleteBlogById= async(req,res)=>{

  try {
      const {blogId}= req.params;

      if(!blogId){
        return res.status(404)
                  .json({success:false, message:"blog not found"})
     }
      await UserInfo.findByIdAndDelete(blogId);

      await Comment.deleteMany({blog:blogId});
       return res.status(200)
              .json({success:true, message:"Blog deleted successfully"})
  } 
  catch (error) {
       return res.status(500)
                 .json({success:false, message:error.message})
  }
}

export const toggleBlogPublishById= async(req,res)=>{

  try {
      const {blogId}= req.params;

      if(!blogId){
        return res.status(404)
                  .json({success:false, message:"blog not found"})
     }
     const Blog=  await UserInfo.findById(blogId);

      Blog.isPublished= !Blog.isPublished;
 
      await Blog.save();

      return res.status(200)
                .json({success:true, message:"Blog status updated successfully"})
   
  } 
  catch (error) {
       return res.status(500)
                 .json({success:false, message:error.message})
  }
}

export const addComment= async(req,res)=>{

  try{
   const {blog, content, name} = req.body;

   if(!blog || !content || !name){
      return res.status(404)
                .json({success:false, message:"Missing Fields"})
   } 
   await Comment.create({
       blog,
       content, 
       name
   });

   return res.status(200)
             .json({success:true, message:"Comment added Successsfully", comment});
  }
     catch (error) {
       return res.status(500)
                 .json({success:false, message:error.message})
  }
}

export const getBlogComments= async(req,res)=>{

  try{
  const {blogId}= req.params;

  if(!blogId){
     return res.status(404)
               .json({success:false, message:"Missing blog ID"})
  }

  const blogComment= await Comment.find({_id:blogId, isApproved:true}).sort({createdAt:-1});

  return res.status(200)
            .json({success:true, blogComment});
  }
     catch (error) {
       return res.status(500)
                 .json({success:false, message:error.message})
  }

}

