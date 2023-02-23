import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_BLOG_DATA } from "../../constants/apiEndPoints";
import { BlogData } from "../../types";
import { getBlogIndexById } from "../../utils/common";
import makeRequest from "../../utils/makeRequest";
import BlogPostCard from "../BlogPostCard";
import "./blogPosts.css";

const BlogPosts = () => {
  const [allBlogData, setAllBlogData] = useState<BlogData[]>([]);
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
        return (
          <BlogPostCard
            key={eachBlogData.id}
            blogData={eachBlogData}
            setAllBlogData={(updatedBlogData: BlogData) => {
              const blogDataIndex = getBlogIndexById(
                allBlogData,
                updatedBlogData.id
              );
              setAllBlogData([
                ...allBlogData.slice(0, blogDataIndex),
                updatedBlogData,
                ...allBlogData.slice(blogDataIndex + 1),
              ]);
            }}
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
