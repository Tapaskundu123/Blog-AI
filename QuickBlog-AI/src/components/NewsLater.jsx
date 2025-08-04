
const NewsLater = () => {

    const HandleSubmit= ()=>{

    }
  return (
    <div className='flex flex-col justify-center items-center py-10  px-6 '>
          <h1 className='text-2xl p-2 sm:text-4xl'>Never Miss a Blog!</h1>
          <p className='text-sm  p-2 text-center'>Subscribe to get the latest blog, new tech, and exclusive news</p>
          <form onSubmit={HandleSubmit}>
            <div className='flex py-4'>
              <input className=' border p-4 pl-4 border-r-l rounded-md rounded-r-none md:w-150' type="text" placeholder='Enter your email id' required />
              <button className="p-4 border-none bg-primary rounded-l-none rounded-r-md text-white cursor-pointer">Subscribe</button>
            </div>
          </form>
        </div>
  )
}

export default NewsLater;