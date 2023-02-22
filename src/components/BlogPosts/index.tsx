import React from "react";
import allBlogData from "../../mocks/blogData.json";
import BlogPostCard from "../BlogPostCard";
import "./blogPosts.css";

const BlogPosts = () => {
  return (
    <div className="posts basic-padding">
      {allBlogData.map((eachBlogData) => {
        return <BlogPostCard key={eachBlogData.id} blogData={eachBlogData} />;
      })}
    </div>
  );
};

export default BlogPosts;
