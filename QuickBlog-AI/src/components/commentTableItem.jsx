import { assets } from '../assets/assets.js';

const CommentTableItem = ({ comment, isMobile }) => {
  const { blog, createdAt, Name, content, isApproved } = comment;
  const blogDate = new Date(createdAt);

  if (isMobile) {
    // Card Layout for Mobile
    return (
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <div className="space-y-2">
          <p>
            <b>Blog:</b> {blog.title}
          </p>
          <p>
            <b>Name:</b> {Name}
          </p>
          <p>
            <b>Comment:</b> {content}
          </p>
          <p className="text-gray-500 text-sm">
            <b>Date:</b> {blogDate.toLocaleDateString()}
          </p>
          <div className="flex  gap-4 items-center">
            {!isApproved ? (
              <img
                className="h-6 cursor-pointer"
                src={assets.tick_icon}
                alt="Approve"
              />
            ) : (
              <p className="text-green-600 text-sm">Approved</p>
            )}
            <img
              className="h-6 cursor-pointer"
              src={assets.bin_icon}
              alt="Delete"
            />
          </div>
        </div>
      </div>
    );
  }

  // Table Row for Laptop
  return (
    <tr className="border-b">
      <td className="p-4">
        <p>
          <b>Blog:</b> {blog.title}
        </p>
        <p>
          <b>Name:</b> {Name}
        </p>
        <p>
          <b>Comment:</b> {content}
        </p>
      </td>
      <td className="text-center p-4">{blogDate.toLocaleDateString()}</td>
      <td className="text-center p-4">
        <div className="flex justify-center items-center md:flex-col gap-2">
          {!isApproved ? (
            <img
              className="h-8 cursor-pointer"
              src={assets.tick_icon}
              alt="Approve"
            />
          ) : (
            <p className="text-green-600">Approved</p>
          )}
          <img
            className="h-8 cursor-pointer"
            src={assets.bin_icon}
            alt="Delete"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;