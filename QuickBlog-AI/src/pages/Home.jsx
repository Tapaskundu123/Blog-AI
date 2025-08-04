import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import BlogList from '../components/BlogList.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { blog_data } from '../assets/assets.js';
import NewsLater from '../components/NewsLater.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <Navbar />
      <Header />
      <BlogList menu={menu} setMenu={setMenu} />
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {blog_data
          .filter(blog => menu === "All" || menu === blog.category)
          .map((item, index) => (
            <BlogCard blog={item} key={index} />
          ))}
      </div>
      <NewsLater/>
      <Footer/>
    </div>
  );
};

export default Home;
