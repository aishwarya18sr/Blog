import { useEffect, useState } from "react";
import { GET_BLOG_DATA } from "../../constants/apiEndPoints";
import { BlogData } from "../../types";
import makeRequest from "../../utils/makeRequest";
import BlogPostCard from "../BlogPostCard";
import "./blogPosts.css";

const BlogPosts = () => {
  const [blogData, setBlogData] = useState<BlogData[]>();
  const [error, setError] = useState();

  useEffect(() => {
    makeRequest(GET_BLOG_DATA)
      .then((response) => {
        setBlogData(response);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  if (error) {
    return (
      <div className="blogDataError">
        <p>{error}</p>
      </div>
    );
  }
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
