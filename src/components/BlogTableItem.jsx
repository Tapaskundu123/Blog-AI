import React from 'react'
import { assets } from '../assets/assets.js';

const BlogTableItem = ({blog, fetchBlogs, index }) => {


    const {title, createdAt}= blog;

    const  blogDate= new Date(createdAt);
  return (
     <tr className='p-4 bg-white border border-gray-400'>
        <th className='p-3'>{index}</th>
          <td className='text-sm text-gray-700' >{title}</td>
          <td className='text-sm'>{blogDate.toDateString()}</td>
          <td>
            <p className='text-green-400 font-semibold text-sm'>{blog.published? 'Published':'Unpublished'}</p>
          </td>

          <td >
            <div className='flex gap-2'>
              <button className='p-2 border border-gray-300 text-sm rounded cursor-pointer'>{blog.isPublished ? 'Unpublish':'publish'}</button>
              <img src={assets.cross_icon} alt="" />
            </div>
          </td>
      </tr>
  )
}

export default BlogTableItem