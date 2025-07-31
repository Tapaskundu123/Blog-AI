import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
       <Navbar/>
        <div className="flex">
          <Sidebar />
         <div className="flex-1 ">
          <Outlet /> {/* This will render Dashboard, AddBlog, etc */}
         </div>
        </div>
    </>
  )
}

export default Layout