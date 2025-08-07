import express from 'express';
import { addComment, Allblogs, BlogPost, deleteBlogById, getBlogById,getBlogComments, toggleBlogPublishById } from '../controllers/Blog.controller.js';
import { auth } from '../middleware/auth.js';
import { upload } from '../middleware/multer.js';

const blogRouter = express.Router();

blogRouter.post('/add', upload.single('Image'), auth, BlogPost);

blogRouter.get('/AllBlogs', Allblogs);
blogRouter.get('/getBlogs/:blogId',getBlogById);
blogRouter.get('/delete-blog/:blogId',auth,deleteBlogById);

blogRouter.get('/toggle-Publish/:blogId',auth,toggleBlogPublishById);// for approved 

blogRouter.post('/addComment',addComment); // add comment by user

blogRouter.post('/get-blog-comments/:blogId',getBlogComments); //get all comments

export default blogRouter;


