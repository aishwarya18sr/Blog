import { useEffect, useState } from "react";
import posts from "../../assets/index.json";
import { BlogData } from "../../types";
import PostCard from "../postCard";
import "./posts.css";

const Posts = () => {
  const [blogData, setBlogData] = useState<BlogData[]>();
  useEffect(() => {
    // makeRequest(GET_BLOG_DATA).then((response) => {
    //   setBlogData(response);
    // });
    setBlogData(posts);
  }, []);
  return (
    <div className="posts basic-padding">
      {blogData?.map((eachBlogData) => {
        return <PostCard {...eachBlogData} />;
      })}
    </div>
  );
};

export default Posts;
