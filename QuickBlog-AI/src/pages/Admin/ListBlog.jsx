import { useState, useEffect } from 'react';
import { blog_data } from '../../assets/assets.js';
import BlogTableItem from '../../components/BlogTableItem.jsx';

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = () => {
    setBlogs(blog_data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-10 py-10 md:py-4">
      {/* Header */}
      <div className="mb-6 md:mb-10">
        <p className="py-3 font-semibold text-lg">All Blogs</p>
      </div>

      {/* Table for Laptop Screens */}
      <div className="hidden md:block">
        <table className="w-full table-auto text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Blog Title</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <BlogTableItem
                key={blog._id}
                blog={blog}
                fetchBlogs={fetchBlogs}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Layout for Mobile Screens */}
      <div className="md:hidden space-y-4">
        {blogs.map((blog, index) => (
          <BlogTableItem
            key={blog._id}
            blog={blog}
            fetchBlogs={fetchBlogs}
            index={index + 1}
            isMobile
          />
        ))}
      </div>
    </div>
  );
};

export default ListBlog;