import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets.js'
const Comments = ({comment,fetchComments}) => {

  const [comments, setComments]= useState([]);
  const [filter, setFilter]= useState('Not Approved');

  const {blog, createdAt, _id}= comment;
  

    
  const fetchComments= async()=>{

    setComments(comments_data);

  }
  useEffect(()=>{
    fetchComments();
    
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Comments