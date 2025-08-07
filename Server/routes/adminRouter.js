import express from "express";
import { getAllBlogsAdmin, getAllComments, getApproveCommentById, getDashboardData, getDeleteCommentById, LoginAdmin } from "../controllers/AdminController.js";
import auth from '../middleware/auth.js'
const adminRouter= express.Router();

adminRouter.post('/login',LoginAdmin);
adminRouter.get('/get-All-blogs-admin',auth,getAllBlogsAdmin);
adminRouter.get('/get-all-comments',auth,getAllComments);
adminRouter.get('/get-dashboard-data',auth,getDashboardData);
adminRouter.delete('/delete-comment/:id',auth,getDeleteCommentById);
adminRouter.post('/approve-comment/:id',auth,getApproveCommentById)

export default adminRouter;

