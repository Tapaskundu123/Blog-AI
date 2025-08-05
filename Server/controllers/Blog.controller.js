
import fs from 'fs'
import imagekit from '../DB/imageKit.js';
import { UserInfo } from '../models/Blog.model.js';

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
  