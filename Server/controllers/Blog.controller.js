
import fs from 'fs'
import imagekit from '../DB/imageKit.js';
import { UserInfo } from '../models/Blog.model.js';

export const BlogPost = async (req, res) => {
  try {
    const { title, subTitle, blogDescription, blogCategory, isPublished } = JSON.parse(req.body.blog);
    const imageFile = req.file;

    // Check if fields are provided
    if (!title || !subTitle || !blogDescription || !blogCategory) {
      return res.status(404).json({ success: false, message: "Missing Required fields" });
    }

    // Read file from disk
    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalName,
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
      image: optimizedImageUrl,
      isPublished
    });

    res.json({ success: true, message: "Blog added successfully" });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
  