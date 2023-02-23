import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GET_BLOG_DATA } from "../../constants/apiEndPoints";
import { BlogPostContext } from "../../contexts/BlogPostContext";
import makeRequest from "../../utils/makeRequest";
import BlogPostCard from "../BlogPostCard";
import "./blogPosts.css";

const BlogPosts = () => {
  const { allBlogData, setAllBlogData } = useContext(BlogPostContext);
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_BLOG_DATA, {}, navigate).then((response) => {
      setAllBlogData(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return allBlogData ? (
    <div className="posts basic-padding">
      {allBlogData.map((eachBlogData) => {
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
