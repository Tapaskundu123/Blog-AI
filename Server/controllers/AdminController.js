import jwt from 'jsonwebtoken';
import { UserInfo } from '../models/Blog.model.js';
import { Comment } from '../models/comment.model.js';

// ✅ Admin Login
export const LoginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(404).json({ success: false, message: "Invalid Email" });
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(404).json({ success: false, message: "Invalid Password" });
    }

    const jwtToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY);

    console.log(jwtToken);

    return res.status(200)
      .cookie('Token', jwtToken, {
        secure: true,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .json({ success: true, message: "Admin Logged in Successfully",jwtToken });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get All Blogs (Admin)
export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await UserInfo.find({}).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get All Comments
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate('blog')
      .sort({ createdAt: -1 });

    if (comments.length === 0) {
      return res.status(200).json({ success: true, message: "No comments found" });
    }

    res.json({ success: true, comments });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Admin Dashboard Data
export const getDashboardData = async (req, res) => {
  try {
    const recentBlogs = await UserInfo.find({}).sort({ createdAt: -1 });
    const countBlogs = await UserInfo.countDocuments();
    const comments = await Comment.find({}).sort({ createdAt: -1 });
    const countComment = await Comment.countDocuments();
    const drafts = await UserInfo.countDocuments({ isPublished: false });

    const dashboardData = {
      countBlogs,
      countComment,
      drafts,
    };

    res.json({ success: true, dashboardData });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete Comment by ID
export const getDeleteCommentById = async (req, res) => {
  try {
    const { id } = req.params; // optionally use req.params.id for DELETE routes
    await Comment.findByIdAndDelete(id);
    return res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Approve Comment by ID
export const getApproveCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndUpdate(id, { isApproved: true });
    return res.json({ success: true, message: "Comment approved successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
