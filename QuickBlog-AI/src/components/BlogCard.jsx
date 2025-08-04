import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { _id, title, description, image, category } = blog;

  const navigate= useNavigate();
  return (
    <div className="py-2 px-3 w-80 rounded-2xl border border-gray-300 shadow-sm bg-white hover:shadow-xl hover:scale-105 duration-300 cursor-pointer" onClick={()=>navigate(`/Blog/${_id}`)}>
      <img src={image} alt="blog_image" className="h-80 w-full object-cover rounded-xl py-4" />
      <span className="text-sm py-1 px-3 rounded-full bg-primary text-white">
        {category}
      </span>
      <div className="p-2">
        <p className="text-lg font-bold py-1">{title}</p>
        <p className="text-xs font-serif text-gray-700 italic " dangerouslySetInnerHTML={{ __html: description.slice(0, 80) + '...' }}></p>
      </div>
    </div>
  );
};

export default BlogCard;
