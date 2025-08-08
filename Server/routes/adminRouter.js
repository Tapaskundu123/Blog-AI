import express from "express";
import { getAllBlogsAdmin, getAllComments, getApproveCommentById, getDashboardData, getDeleteCommentById, LoginAdmin, LogoutAdmin } from "../controllers/AdminController.js";
import {auth} from '../middleware/auth.js'
const adminRouter= express.Router();

//login and logout
adminRouter.post('/login',LoginAdmin);
adminRouter.post('/logout', LogoutAdmin);

//all blogs access
adminRouter.get('/get-All-blogs-admin',auth,getAllBlogsAdmin);

//all comment access
adminRouter.get('/get-all-comments',auth,getAllComments);

adminRouter.delete('/delete-comment/:id',auth,getDeleteCommentById);// comment delete
adminRouter.post('/approve-comment/:id',auth,getApproveCommentById);//approve comment

//all dashboard data access
adminRouter.get('/get-dashboard-data',auth,getDashboardData);

export default adminRouter;

