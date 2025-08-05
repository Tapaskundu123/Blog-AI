import express from 'express';
import { Allblogs, BlogPost, deleteBlogById, getBlogById, toggleBlogPublishById } from '../controllers/Blog.controller.js';
import { auth } from '../middleware/auth.js';
import { upload } from '../middleware/multer.js';

const blogRouter = express.Router();

blogRouter.post('/add', upload.single('Image'), auth, BlogPost);

blogRouter.get('/AllBlogs', Allblogs);
blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/delete-blog',auth,deleteBlogById);
blogRouter.post('/toggle-Publish',auth,toggleBlogPublishById);

export default blogRouter;

