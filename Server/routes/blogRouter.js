import express from 'express';
import { BlogPost } from '../controllers/Blog.controller.js';
import { auth } from '../middleware/auth.js';
import { upload } from '../middleware/multer.js';

const blogRouter = express.Router();

blogRouter.post('/add', upload.single('Image'), auth, BlogPost);

export default blogRouter;
