import { useState, useEffect, useRef } from 'react';
import { assets } from '../../assets/assets';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const AddBlog = () => {
  const [blogFile, setBlogFile] = useState(null);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogSubTitle, setBlogSubTitle] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [blogCategory, setBlogCategory] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const editRef = useRef(null);
  const quillRef = useRef(null);

  // Image preview setup
  useEffect(() => {
    if (blogFile) {
      const objectUrl = URL.createObjectURL(blogFile);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  }, [blogFile]);

  // Initialize Quill editor
  useEffect(() => {
    if (!quillRef.current && editRef.current) {
      quillRef.current = new Quill(editRef.current, {
        theme: 'snow',
        placeholder: 'Write your blog content here...',
      });

      quillRef.current.on('text-change', () => {
        setBlogDescription(quillRef.current.root.innerHTML);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      blogFile,
      blogTitle,
      blogSubTitle,
      blogDescription,
      blogCategory,
      isPublished,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-sm px-6 py-10 md:p-10 flex flex-col gap-4 max-w-md md:max-w-[60%] w-full sm:mx-auto md:mx-0"
    >
      {/* Blog Image Upload */}
      <div className="flex flex-col">
        <label htmlFor="image" className="py-2">Blog Image</label>
        <div
          onClick={() => document.getElementById('hidden-file-input').click()}
          className="cursor-pointer border rounded overflow-hidden w-full h-48 bg-gray-100 flex items-center justify-center"
        >
          <img
            src={previewUrl || assets.upload_area}
            alt="Preview"
            className={previewUrl ? 'w-full h-full object-cover' : 'w-40 h-40 object-cover'}
          />
        </div>
        <input
          type="file"
          id="hidden-file-input"
          className="hidden"
          accept="image/*"
          onChange={(e) => setBlogFile(e.target.files[0])}
        />
      </div>

      {/* Blog Title */}
      <div className="flex flex-col">
        <label htmlFor="blogTitle" className="py-2">Blog Title</label>
        <input
          type="text"
          id="blogTitle"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          placeholder="Type here"
          className="py-3 px-2 rounded w-full border"
        />
      </div>

      {/* Blog Subtitle */}
      <div className="flex flex-col">
        <label htmlFor="blogSubTitle" className="py-2">Subtitle</label>
        <input
          type="text"
          id="blogSubTitle"
          value={blogSubTitle}
          onChange={(e) => setBlogSubTitle(e.target.value)}
          placeholder="Type here"
          className="py-3 px-2 rounded w-full border"
        />
      </div>

      {/* Blog Description using Quill */}
      <div className="flex flex-col h-100 relative">
        <label htmlFor="blogDescription" className="py-2">Blog Description</label>
        <div
          ref={editRef}
          className="border rounded p-3 h-full overflow-y-auto"
        ></div>

        <div className='flex justify-end items-center absolute bottom-2 right-2'>
            <span className='text-right py-3 mt-2 px-2 rounded bg-black text-white inline-block'>Generate with AI</span>
        </div>
       
      </div>

      {/* Blog Category */}
      <div className="flex flex-col">
        <label htmlFor="blogCategory" className="py-2">Blog Category</label>
        <select
          id="blogCategory"
          value={blogCategory}
          onChange={(e) => setBlogCategory(e.target.value)}
          className="py-3 px-2 rounded w-full border"
        >
          <option value="" disabled>Select category</option>
          <option value="StartUp">StartUp</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      {/* Publish Checkbox */}
      <div className="flex gap-2 items-center">
        <label htmlFor="publish">Publish now</label>
        <input
          id="publish"
          type="checkbox"
          checked={isPublished}
          onChange={() => setIsPublished((prev) => !prev)}
        />
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" className="p-3 rounded bg-primary text-white w-full">
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
