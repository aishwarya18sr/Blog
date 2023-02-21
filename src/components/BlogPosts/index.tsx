import { useEffect, useState } from "react";
import posts from "../../assets/index.json";
import { GET_BLOG_DATA } from "../../constants/apiEndPoints";
import { BlogData } from "../../types";
import makeRequest from "../../utils/makeReuqest";
import PostCard from "../BlogPostCard";
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
    setBlogData(posts);
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
      {blogData?.map((eachBlogData) => {
        return (
          <PostCard
            key={eachBlogData?.id ?? eachBlogData?.title}
            blogData={eachBlogData}
          />
        );
      })}
    </div>
  ) : (
    <div className="blogDataLoader">
      <p>Loading...</p>
    </div>
  );
};

export default BlogPosts;
