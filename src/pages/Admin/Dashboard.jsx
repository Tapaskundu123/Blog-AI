import  { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets';
import BlogTableItem from '../../components/BlogTableItem';
const Dashboard = () => {

  const [dashboardData, setDashboardData]= useState(
    {
      blogs: 0,
      comments:0,
      drafts: 0,
      recentBlogs: []
    }
  );

  const fetchDashboard= async()=>{
     
    setDashboardData(dashboard_data);
  }

  useEffect(()=>{

    fetchDashboard();
  },[]);

  return (
    <div className='min-h-screen bg-gray-100'>

     <div className='flex flex-wrap gap-4 p-4'>
        <div className='p-4  bg-white transform scale-3d  rounded w-50'>
           <div className='flex gap-2 items-center '>
            <img src={assets.dashboard_icon_1} alt="" />

              <div>
                <p>{dashboardData.blogs}</p>
                <p className='text-sm'>Blogs</p>
              </div>
           </div>
        </div> 
           <div className='p-4 transform scale-3d  rounded bg-white w-50 '>
           <div className='flex gap-2 items-center '>
            <img src={assets.dashboard_icon_2} alt="" />

              <div>
                <p>{dashboardData.comments}</p>
                <p className='text-sm'>Comments</p>
              </div>
           </div>
        </div> 

           <div className='p-4 transform scale-3d  rounded  bg-white w-50'>
           <div className='flex gap-2 items-center'>
            <img src={assets.dashboard_icon_3} alt="" />

              <div>
                <p>{dashboardData.drafts}</p>
                <p className='text-sm'>Drafts</p>
              </div>
           </div>
        </div> 
    </div>

  <div className='p-4'>
    <div className='flex gap-4'>
      <img src={assets.dashboard_icon_4} alt="" />
       <p>Latest Blogs</p>
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
    {dashboardData.recentBlogs.map((blog, index) => (
      <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1} />
    ))}
  </tbody>
</table>

  </div>
  
    </div>
  )
}

export default Dashboard;