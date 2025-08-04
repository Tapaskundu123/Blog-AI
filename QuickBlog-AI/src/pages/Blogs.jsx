import { useState, useEffect, useDebugValue } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets.js";
import Footer from '../components/Footer.jsx'
import Navbar from "../components/Navbar.jsx";
import { assets, comments_data } from "../assets/assets.js";
import moment from "moment";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { CircleUserRound } from "lucide-react";
import Loader from "../components/Loader.jsx";

const Blogs = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [newCommentByUser,setNewCommentByUser]= useState('')
   const [newCommentUserName,setNewCommentUserName]= useState('')

  const HandleComment= (e)=>{
     e.preventDefault();
    
  }

  useEffect(() => {
    const fetchBlogData = async () => {

      await new Promise(res => setTimeout(res, 2000)); // Simulate loading
      
      const blog_details = blog_data.find((blog) => blog._id === id);
      setData(blog_details);
    };

    fetchBlogData();

  }, [id]);

  
return data? (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto py-10 relative z-10">
        <p className="text-center text-xs sm:text-sm text-primary font-medium mb-2">
          Published on {moment(data.createdAt).format("MMMM Do YYYY")}
        </p>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-center leading-snug mb-4">
          {data.title}
        </h1>

        <h2 className="text-center text-sm sm:text-base lg:text-lg italic text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: data.subTitle }}>
        
        </h2>

        <div className="flex justify-center mb-4">
          <p className="bg-primary/10 text-sm sm:text-base text-primary font-medium px-4 py-2 rounded-full text-center w-fit">
            Michael Brown
          </p>
        </div>

        <img
          src={data.image}
          alt={data.title}
          className="w-full max-h-[450px] object-cover rounded-xl mb-6 shadow-lg"
        />

        <div className="text-sm text-gray-500 text-center mb-4 capitalize">
          Category: <span className="text-primary font-semibold">{data.category}</span>
        </div>

        <div className="text-base sm:text-lg leading-7 font-serif text-justify text-gray-800">
          <p dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>

        <div className="py-10">
          <h1 className="py-2"><span className="font-semibold">Comments </span>{ comments_data.length}</h1>
          <div className="flex flex-col gap-2">
           {comments_data.map((item)=>(
            <div className="bg-primary-200 border border-gray-400 rounded px-4 py-3 w-full">
               <p className="flex gap-1 font-medium"><CircleUserRound/>{item.name}</p>
               <p className="pl-6 text-sm p-2">{item.content}</p>
               <p className="text-right text-xs">{moment(item.createdAt).fromNow()}</p>
            </div>
           ))} 
             
          </div>
        </div>

         <form onSubmit={HandleComment} className="w-[70%] gap-2">  {/* add comment section */}
            <h1 className="py-2">Add your comment</h1>
            <input type="text" placeholder="Name" value={newCommentUserName} onChange={(e)=>setNewCommentUserName(e.target.value)} className="w-full px-4 border py-2 my-2 rounded"/>
            <textarea type="text" placeholder="Comment" value={newCommentByUser} onChange={(e)=>setNewCommentByUser(e.target.value)} className="w-full h-40 border px-4 py-2 my-2 rounded"/>
            <button className="bg-primary border-none text-white rounded-xl py-3 px-6" type="submit">Submit</button>
          </form>
{/* share buttons */}
 <div className="py-4">
  <p>Share this article on social media</p>
    <div className="flex gap-4 py-2 text-2xl">
       <FaFacebook className="cursor-pointer text-blue-600" />
       <FaTwitter className="cursor-pointer text-sky-500" />
       <FaInstagram className="cursor-pointer text-pink-600" />
     </div>
   </div>

      </div>
     <Footer/>
      <img
        src={assets.gradientBackground}
        alt="blur-bg"
        className="absolute -top-20 -z-0 opacity-30 w-full h-auto"
      />
    </div>
  ):(<Loader/>)
};

export default Blogs;
