import { useEffect, useState } from 'react'
import { assets, comments_data } from '../../assets/assets.js'
const Comments = ({comment,fetchComments}) => {

  const [comments, setComments]= useState([]);
  // const [filter, setFilter]= useState('Not Approved');

  const {blog, createdAt, _id}= comment;
  const blogDate= new Date(createdAt);

    
  const fetchComments= async()=>{

    setComments(comments_data);

  }
  useEffect(()=>{
    fetchComments();
    
  },[])

  return (
    <div>
      <table>

        <thead>
          <tr>
            <th>BLOG TITLE AND CONTENT</th>
            <th>DATE</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
         <td>
          <b>Blog:</b>{blog.title}
          <br />
          <b>Name:</b>{comments.Name}
          <br />
          <b>comment:</b>{comments.content}   
        </td>

        <td>{blogDate.toLocaleDateString()}</td>

        <td>
          <div>{!comments.isApproved ?
             <img src={assets.tick_icon} />:<p>Approved</p>}
             <img src={assets.bin_icon} alt="" />
            </div>
         </td>

         
        </tbody>
      </table>
    </div>
  )
}

export default Comments;