import { House,MessageCircleMore, SquarePlus , NotebookTabs  } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-[50%] md:w-[25%] border border-gray-400 min-h-screen">
      <div className="py-4">
        <NavLink
          to="/Admin"
          end
          className={({ isActive }) =>
            `flex p-4 gap-2 cursor-pointer ${
              isActive && 'bg-primary/10 border-r-4 border-primary'
            }`
          }
        >
          <House />
          <p>Dashboard</p>
        </NavLink>

        <NavLink
          to="/Admin/AddBlog"
          className={({ isActive }) =>
            `flex p-4 gap-2 cursor-pointer ${
              isActive && 'bg-primary/10 border-r-4 border-primary'
            }`
          }
        >
          <SquarePlus />
          <p>Add Blogs</p>
        </NavLink>

        <NavLink
          to="/Admin/ListBlog"
          className={({ isActive }) =>
            `flex p-4 gap-2 cursor-pointer ${
              isActive && 'bg-primary/10 border-r-4 border-primary'
            }`
          }
        >
          <NotebookTabs />
          <p>Blog Lists</p>
        </NavLink>

        <NavLink
          to="/Admin/Comments"
          className={({ isActive }) =>
            `flex p-4 gap-2 cursor-pointer ${
              isActive && 'bg-primary/10 border-r-4 border-primary'
            }`
          }
        >
          <MessageCircleMore />
          <p>Comments</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
