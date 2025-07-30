
import backgroundImg from '../assets/gradientBackground.png'
import starIcon from '../assets/star_icon.svg'
  
const Header = () => {

const HandleSubmit= (e)=>{
   e.preventDefault();

}
  return (
    <>
      <div className='relative '>
        <div className="flex flex-col justify-center items-center"> 
 
            <button className='px-4 py-2 bg-primary/10 text-primary flex rounded-4xl border border-primary/40 gap-2 text-sm'>
              <p>New: AI feature integrated</p>
              <img src={starIcon} alt="star"/>
            </button>
           <h1 className='text-3xl leading-8 sm:text-6xl sm:leading-16 text-gray-600 font-semibold py-4 text-center'>Your own <span className='text-primary'>blogging </span> <br/>platform</h1>
           <p className=' leading-4 w-[70%] my-3 max-sm:text-xs  sm:my-8 sm:leading-8 sm:w-[50%] text-center'>This is your space to think out loud, to share what matters, and to write without filters. wheteher it's one word or a thousand, your story start right here.</p>

           <form onSubmit={HandleSubmit} className='w-[80%] bg-white border rounded flex justify-between gap-1 sm:w-[40%]  '>
              <input type="text" placeholder='Search for Blogs' className='pl-4 w-full outline-none border-none '/>
              <button className='bg-primary border-none py-2 px-6 my-1 mr-1 rounded cursor-pointer text-white sm:py-3'>Seacrh</button>
           </form>
         </div>
         <img src={backgroundImg} alt="bg-image" className='absolute -top-50 -z-1 opacity-50' />
      </div>
    </>
  )
}

export default Header;
