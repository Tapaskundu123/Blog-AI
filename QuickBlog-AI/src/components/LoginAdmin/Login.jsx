import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAppContext } from '../../../context/AppContext';

const Login = () => {

  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  const {axios,setToken}= useAppContext()

   const HandleSubmit = async(e)=>{
        e.preventDefault();

        try {
            const resData= await axios.post('/login',{email,password});

         if(resData.success){
          setToken(resData.jwtToken)
          localStorage.setItem('token',resData.jwtToken)
          axios.defaults.headers.common['Authorization']= resData.jwtToken;
         }
         else{
          toast.error(resData.message)
         }
          
        } catch (error) {
          toast.error(error.message);
        }
     
   }

  return (
   <div className='min-h-screen flex justify-center items-center'>
      <form onSubmit={HandleSubmit} className='border-2 transform-3d border-gray-300 py-8 px-10 rounded'>
        <h1 className='text-center text-4xl font-semibold'><span className='text-primary'>Admin</span> Login</h1>
        <p className='text-center text-sm p-4 w-[340px]'>Enter your credentials to access the admin panel</p>

        <div className='py-10'>
            <label htmlFor="email" className='pb-4'>Email</label>
            <input type="text" placeholder='Enter email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}
             className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-black text-sm"/>
        </div>
          <div>
            <label htmlFor="password" className='pb-4'>Password</label>
            <input type="text" placeholder='Enter password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}  className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-black text-sm"/>
        </div>

        <button type='submit' className='w-full bg-primary border-none text-white rounded py-4 mt-10 cursor-pointer'>Login</button>
      </form>
   </div>
  )
}

export default Login;
