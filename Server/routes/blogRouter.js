import express from 'express'
import { BlogPost } from '../controllers/Blog.controller.js';
import { auth } from '../middleware/auth.js';

const blogRouter= express.Router();

blogRouter.post('/add',upload.singleImage('image'),auth, BlogPost);

export default blogRouter;
