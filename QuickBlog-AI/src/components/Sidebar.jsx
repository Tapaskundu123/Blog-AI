import { useState } from 'react';
import { House, MessageCircleMore, SquarePlus, NotebookTabs, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (visible only when sidebar is closed on mobile) */}
      {!isOpen && (
        <button
          className="md:hidden absolute top-20 left-4 z-50 bg-white p-2 rounded shadow border"
          onClick={() => setIsOpen(true)}
          aria-label="Open Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`
          md:static fixed top-20 left-0 h-screen bg-white border-r border-gray-300 shadow-md z-40
          w-[70%] sm:w-[40%] md:w-[25%] lg:w-[20%]
          transform transition-transform duration-300 ease-in-out overflow-y-hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="py-4 flex flex-col gap-1 relative">
          {/* Close Button (visible only on mobile when sidebar is open) */}
          <button
            className="absolute top-2 right-2 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-label="Close Sidebar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Links */}
          <NavLink
            to="/Admin"
            end
            className={({ isActive }) =>
              `flex items-center p-4 gap-2 mt-4 ${
                isActive ? 'bg-primary/10 border-r-4 border-primary font-semibold' : 'hover:bg-gray-50'
              }`
            }
          >
            <House className="w-5 h-5" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink
            to="/Admin/AddBlog"
            className={({ isActive }) =>
              `flex items-center p-4 gap-2 ${
                isActive ? 'bg-primary/10 border-r-4 border-primary font-semibold' : 'hover:bg-gray-50'
              }`
            }
          >
            <SquarePlus className="w-5 h-5" />
            <p>Add Blogs</p>
          </NavLink>

          <NavLink
            to="/Admin/ListBlog"
            className={({ isActive }) =>
              `flex items-center p-4 gap-2 ${
                isActive ? 'bg-primary/10 border-r-4 border-primary font-semibold' : 'hover:bg-gray-50'
              }`
            }
          >
            <NotebookTabs className="w-5 h-5" />
            <p>Blog Lists</p>
          </NavLink>

          <NavLink
            to="/Admin/Comments"
            className={({ isActive }) =>
              `flex items-center p-4 gap-2 ${
                isActive ? 'bg-primary/10 border-r-4 border-primary font-semibold' : 'hover:bg-gray-50'
              }`
            }
          >
            <MessageCircleMore className="w-5 h-5" />
            <p>Comments</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;