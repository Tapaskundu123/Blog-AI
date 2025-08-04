import { useEffect, useState } from 'react';
import { assets, dashboard_data } from '../../assets/assets';
import BlogTableItem from '../../components/BlogTableItem';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboard = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 mt-10 sm:mt-0">
      {/* Metrics Section */}
      <div className="flex flex-wrap gap-4 p-4 sm:p-6 md:p-8">
        <div className="p-4 bg-white rounded-lg shadow-sm w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.67rem)]">
          <div className="flex gap-2 items-center">
            <img src={assets.dashboard_icon_1} alt="Blogs Icon" className="h-8" />
            <div>
              <p className="text-lg font-semibold">{dashboardData.blogs}</p>
              <p className="text-sm text-gray-600">Blogs</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.67rem)]">
          <div className="flex gap-2 items-center">
            <img src={assets.dashboard_icon_2} alt="Comments Icon" className="h-8" />
            <div>
              <p className="text-lg font-semibold">{dashboardData.comments}</p>
              <p className="text-sm text-gray-600">Comments</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.67rem)]">
          <div className="flex gap-2 items-center">
            <img src={assets.dashboard_icon_3} alt="Drafts Icon" className="h-8" />
            <div>
              <p className="text-lg font-semibold">{dashboardData.drafts}</p>
              <p className="text-sm text-gray-600">Drafts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Blogs Section */}
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex gap-2 items-center mb-4 md:mb-6">
          <img src={assets.dashboard_icon_4} alt="Recent Blogs Icon" className="h-6" />
          <p className="font-semibold text-lg">Latest Blogs</p>
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
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Card Layout for Mobile Screens */}
        <div className="md:hidden space-y-4">
          {dashboardData.recentBlogs.map((blog, index) => (
            <BlogTableItem
              key={blog._id}
              blog={blog}
              fetchBlogs={fetchDashboard}
              index={index + 1}
              isMobile
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;