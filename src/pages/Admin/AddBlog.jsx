import { useState } from 'react';

const AddBlog = () => {
  const [blogFile, setBlogFile] = useState(null);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogSubTitle, setBlogSubTitle] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [blogCategory, setBlogCategory] = useState('');
  const [isPublished, setIsPublished] = useState(false);

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
    <form onSubmit={handleSubmit} className="text-sm p-6 md:p-10 flex flex-col gap-4 max-w-md w-full ">
      
      {/* File Input */}
      <div className="flex flex-col">
        <label htmlFor="file" className="py-2">Add file</label>
        <input
          type="file"
          id="file"
          className="w-full border rounded-2xl p-3"
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

      {/* Blog Description */}
      <div className="flex flex-col">
        <label htmlFor="blogDescription" className="py-2">Blog Description</label>
        <textarea
          id="blogDescription"
          className="border rounded p-3 h-40 resize-none w-full"
          value={blogDescription}
          onChange={(e) => setBlogDescription(e.target.value)}
        ></textarea>
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
        <button type="submit" className="p-3 rounded bg-primary text-white w-full">Add Blog</button>
      </div>
    </form>
  );
};

export default AddBlog;
