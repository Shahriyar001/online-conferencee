import React from "react";

const BlogCard = ({ blog }) => {
  const { img, des, name } = blog;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={img} alt="Shoes" className="w-[420px] h-[355px]" />
      </figure>
      <div className="my-4">
        <p className="text-2xl">{des}</p>
        <div className="card-actions my-3 ">
          <div className="text-xl w-1/2">• {name}</div>
          <div className="text-xl">12 FEB 2025</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
