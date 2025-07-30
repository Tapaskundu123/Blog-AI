import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets.js";
import Navbar from "../components/Navbar.jsx";
import { assets } from "../assets/assets.js";
import moment from "moment";

const Blogs = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const blog_details = blog_data.find((blog) => blog._id === id);
      setData(blog_details);
    };

    fetchBlogData();
  }, [id]);

  if (!data) {
    return <p className="text-center py-8 text-sm sm:text-base">Loading blog...</p>;
  }

  return (
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
      </div>

      <img
        src={assets.gradientBackground}
        alt="blur-bg"
        className="absolute -top-20 -z-0 opacity-30 w-full h-auto"
      />
    </div>
  );
};

export default Blogs;
