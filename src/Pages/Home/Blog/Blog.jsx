import React from "react";
import BlogCard from "./BlogCard";
import img from "../../../assets/blog.png";
import img2 from "../../../assets/blog2.png";
import img3 from "../../../assets/blog3.png";

const Blog = () => {
  const blogs = [
    {
      img: img,
      des: "Beyond the Stage: How Conferences Inspire Innovation & Collaboration",
      name: "EventTrends",
    },
    {
      img: img2,
      des: "Beyond the Stage: How Conferences Inspire Innovation & Collaboration",
      name: "EventTrends",
    },
    {
      img: img3,
      des: "The Ultimate Guide to Engaging & Immersive Event Experiences",
      name: "TechSummit",
    },
  ];
  return (
    <div>
      <div className="max-w-[1329px] mx-auto my-20">
        <h1 className="text-5xl">RECENT BLOG</h1>
        <div className="grid grid-cols-3 gap-6  my-5 ">
          {blogs?.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
