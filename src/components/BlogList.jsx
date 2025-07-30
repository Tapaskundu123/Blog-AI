import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

const BlogList = ({menu,setMenu}) => {

  const blogList = ["All", "Technology", "Startup", "Lifestyle", "Finance"];

  return (
    <LayoutGroup>
      <div className="flex justify-center flex-wrap items-center gap-4 py-10 relative">
        {blogList.map((item, index) => (
          <div key={index} className="relative">
            {menu === item && (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 rounded-full bg-primary z-0"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <button
              onClick={() => setMenu(item)}
              className={`relative z-10 py-1 px-4 rounded-full cursor-pointer ${
                menu === item ? "text-white" : "text-gray-500"
              }`}
            >
              {item}  
            </button>
          </div>
        ))}
      </div>
    </LayoutGroup>
  );
};

export default BlogList;

