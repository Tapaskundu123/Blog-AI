import {  useState,useEffect } from 'react'
import { blog_data } from '../../assets/assets.js';
import BlogTableItem from '../../components/BlogTableItem';

const ListBlog = () => {

  const [blogs, setBlogs]= useState([]);

  const fetchBlogs= ()=>{
      setBlogs(blog_data)
  } 

  useEffect(()=>{

  fetchBlogs();
  },[])
   return (
    <div className='p-4'>
          <div>
            <p>All Blogs</p>
           </div>

<table className='w-full text-left mt-4'>
  <thead className='bg-white'>
    <tr>
      <th className='p-2'>#</th>
      <th className='p-2'>Blog Title</th>
      <th className='p-2'>Date</th>
      <th className='p-2'>Status</th>
      <th className='p-2'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {blogs.map((blog, index) => (
      <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} />
    ))}
  </tbody>
</table>

    </div>
  )
}

export default ListBlog