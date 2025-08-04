import { assets } from '../assets/assets.js';

const BlogTableItem = ({ blog, fetchBlogs, index, isMobile }) => {
  const { title, createdAt, published } = blog;
  const blogDate = new Date(createdAt);

  if (isMobile) {
    // Card Layout for Mobile
    return (
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <div className="space-y-2">
          <p>
            <b>#:</b> {index}
          </p>
          <p>
            <b>Title:</b> {title}
          </p>
          <p className="text-gray-500 text-sm">
            <b>Date:</b> {blogDate.toLocaleDateString()}
          </p>
          <p className="text-green-400 font-semibold text-sm">
            <b>Status:</b> {published ? 'Published' : 'Unpublished'}
          </p>
          <div className="flex gap-2 items-center">
            <button
              className="px-3 py-1 border border-gray-300 text-xs rounded cursor-pointer bg-white"
            >
              {published ? 'Unpublish' : 'Publish'}
            </button>
            <img
              className="h-6 cursor-pointer"
              src={assets.cross_icon}
              alt="Delete"
            />
          </div>
        </div>
      </div>
    );
  }

  // Table Row for Laptop
  return (
    <tr className="bg-white border-b border-gray-400">
      <th className="p-4">{index}</th>
      <td className="p-4 text-sm text-gray-700">{title}</td>
      <td className="p-4 text-sm">{blogDate.toLocaleDateString()}</td>
      <td className="p-4">
        <p className="text-green-400 font-semibold text-sm">
          {published ? 'Published' : 'Unpublished'}
        </p>
      </td>
      <td className="p-4">
        <div className="flex gap-2 justify-center">
          <button className="px-4 py-2 border border-gray-300 text-sm rounded cursor-pointer">
            {published ? 'Unpublish' : 'Publish'}
          </button>
          <img
            className="h-8 cursor-pointer"
            src={assets.cross_icon}
            alt="Delete"
          />
        </div>
      </td>
    </tr>
  );
};

export default BlogTableItem;