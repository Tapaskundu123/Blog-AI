import React from 'react'
import LogoImg from '../assets/logo.svg'
import arrowImg from '../assets/arrow.svg'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    const navigate= useNavigate();
  return (
    <>
      <div className=" flex justify-between items-center px-4 py-4 sm:px-16 border-b-1  border-b-gray-400">
        <img src={LogoImg} alt="logoImg" onClick={()=>navigate('/')}
        className='h-8 sm:h-10 cursor-pointer' />
        <button className='border-none cursor-pointer bg-primary text-white px-6 py-3 rounded-3xl flex ' onClick={()=>navigate('/Login')}>
            <p className='pl-2'>Login</p>
           <img src={arrowImg} alt="arrow" className='text-black pl-2'/>
        </button> 
      </div>
    </>
  )
}

export default Navbar;