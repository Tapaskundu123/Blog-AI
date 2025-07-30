import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import { blog_data } from "../assets/assets.js";

const Blogs = () => {

  const {id} = useParams();

  const [data,setData]= useState(null);


  useEffect(()=>{
 const fetchBlogData= async()=>{
     const blog_details= blog_data.find(blog=> blog._id===id);

    setData(blog_details);

  }

  fetchBlogData();
},[])




  return (
    <div>
         { data.map((item,index)=>(
         <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.desciption}</p>
         </div>
         )
        )}
    </div>
  )
}

export default Blogs