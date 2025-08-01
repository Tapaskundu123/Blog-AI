import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto my-8"></div>
    </div>
  )
}

export default Loader