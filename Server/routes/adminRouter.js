import express from "express";
import { LoginAdmin } from "../controllers/AdminController.js";

const adminRouter= express.Router();

adminRouter.post('/login',LoginAdmin);

export default adminRouter;

