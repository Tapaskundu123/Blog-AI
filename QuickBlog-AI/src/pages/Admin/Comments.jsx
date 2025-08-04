import { useEffect, useState } from 'react';
import { comments_data } from '../../assets/assets.js';
import CommentTableItem from '../../components/CommentTableItem.jsx';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState('Not Approved');

  const fetchComments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="p-4 sm:p-6 mt-10 md:mt-2 md:p-10">
      {/* Header with Filter Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm mb-6 md:mb-10">
        <p className="py-3 font-semibold text-lg">Comments</p>
        <div className="flex gap-2 sm:gap-4">
          <button
            onClick={() => setFilter('Approved')}
            className={`px-3 py-1 sm:px-4 sm:py-2 border rounded-full cursor-pointer text-xs sm:text-sm ${
              filter === 'Approved' ? 'bg-primary text-white border-primary' : 'bg-white border-gray-300'
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter('Not Approved')}
            className={`px-3 py-1 sm:px-4 sm:py-2 border rounded-full cursor-pointer text-xs sm:text-sm ${
              filter === 'Not Approved' ? 'bg-primary text-white border-primary' : 'bg-white border-gray-300'
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Table for Laptop Screens */}
      <div className="hidden md:block">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-4">Blog Title and Comment</th>
              <th className="text-center p-4">Date</th>
              <th className="text-center p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {comments
              .filter((comment) => (filter === 'Approved' ? comment.isApproved : !comment.isApproved))
              .map((comment, index) => (
                <CommentTableItem key={comment._id} comment={comment} index={index + 1} />
              ))}
          </tbody>
        </table>
      </div>

      {/* Card Layout for Mobile Screens */}
      <div className="md:hidden space-y-4">
        {comments
          .filter((comment) => (filter === 'Approved' ? comment.isApproved : !comment.isApproved))
          .map((comment, index) => (
            <CommentTableItem key={comment._id} comment={comment} index={index + 1} isMobile />
          ))}
      </div>
    </div>
  );
};

export default Comments;