import { useEffect, useState } from 'react';
import { comments_data } from '../../assets/assets.js';
import CommentTableItem from '../../components/commentTableItem.jsx';

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
    <div className='p-10'>
      <div className='flex justify-between text-sm mb-10'> <p>Comments</p>
         <div className='flex gap-4'>
               <button onClick={()=>setFilter('Approved')} className='px-4 py-2 border rounded-full cursor-pointer'>Approved</button>
               <button onClick={()=>setFilter('Not Approved')} className='px-4 py-2 border rounded-full cursor-pointer'>Not Approved</button>
        </div>
    </div>
    
      <table className='w-[100%]'>
        <thead>
          <tr>
            <th className='text-left'>BLOG TITLE AND CONTENT</th>
            <th>DATE</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody >
          {comments
            .filter((comment) => {
              if (filter === 'Approved') return comment.isApproved === true;
              return comment.isApproved === false;
            })
            .map((comment, index) => (
              <CommentTableItem key={comment._id} comment={comment} index={index + 1} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
