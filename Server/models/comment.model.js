import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  blog: {
    type: mongoose.Schema.Types.ObjectId, // ✅ FIX: `Types.ObjectId`
    ref: 'blog',
    required: true
  },
  name: {
    type: String, // ✅ FIX: use `String` not `"String"`
    required: true
  },
  content: {
    type: String,
    required: true
  },
  isApproved: {
    type: Boolean, // ✅ Better as Boolean not String
    default: false
  }
}, { timestamps: true });

export const Comment = mongoose.model('Comment', CommentSchema);
