import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_BLOG_DATA } from "../../constants/apiEndPoints";
import { BlogData } from "../../types";
import makeRequest from "../../utils/makeRequest";
import BlogPostCard from "../BlogPostCard";
import "./blogPosts.css";

const BlogPosts = () => {
  const [blogData, setBlogData] = useState<BlogData[]>();
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_BLOG_DATA, {}, navigate).then((response) => {
      setBlogData(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return blogData ? (
    <div className="posts basic-padding">
      {blogData.map((eachBlogData) => {
        return <BlogPostCard key={eachBlogData.id} blogData={eachBlogData} />;
      })}
    </div>
  ) : (
    <div className="blogDataLoader">
      <p>Loading...</p>
    </div>
  );
};

export default BlogPosts;
