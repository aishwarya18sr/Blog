import React, { useContext } from "react";
import clap from "../../assets/icons/clapping.svg";
import heartBlack from "../../assets/icons/heart-black.svg";
import heartRed from "../../assets/icons/heart-red.svg";
import { UPDATE_BLOG_DATA } from "../../constants/apiEndPoints";
import { BlogPostContext } from "../../context/BlogPostContext";
import { BlogData } from "../../types";
import {
  getFormattedDateFromUtcDate,
  updateAllBlogData,
} from "../../utils/common";
import makeRequest from "../../utils/makeRequest";
import "./blogPostCard.css";

interface BlogPostCardProp {
  blogData: BlogData;
}

const BlogPostCard: React.FC<BlogPostCardProp> = ({ blogData }) => {
  const { allBlogData, setAllBlogData } = useContext(BlogPostContext);

  const handleClap = async () => {
    if (allBlogData) {
      try {
        await makeRequest(UPDATE_BLOG_DATA(blogData.id), {
          data: { claps: blogData.claps + 1 },
        });
        updateAllBlogData(
          {
            ...blogData,
            claps: blogData.claps + 1,
          },
          allBlogData,
          setAllBlogData
        );
      } catch (e) {
        //TODO: Handle error
      }
    }
  };

  const handleLike = async () => {
    if (allBlogData) {
      try {
        await makeRequest(UPDATE_BLOG_DATA(blogData.id), {
          data: { liked: !blogData.liked },
        });
        updateAllBlogData(
          {
            ...blogData,
            liked: !blogData.liked,
          },
          allBlogData,
          setAllBlogData
        );
      } catch (e) {
        //TODO: Handle error
      }
    }
  };

  return (
    <div className="post" data-testid="blog-post">
      <div className="post-image">
        <img src={blogData.image} alt="" />
      </div>
      <div className="post-content post-padding">
        <div className="post-meta">
          <div className="post-date">
            {getFormattedDateFromUtcDate(blogData.date)}
          </div>
          <div className="post-reading-time">{blogData.readingTime}</div>
        </div>
        <div className="post-title">{blogData.title}</div>
        <div className="post-description">{blogData.description}</div>
      </div>
      <div className="post-engagements post-padding">
        <div className="clap" onClick={handleClap} data-testid="clap-icon">
          <div className="clap-icon">
            <img src={clap} alt="clap" />
          </div>
          <div className="clap-counter">{blogData.claps}</div>
        </div>
        <div className="like" onClick={handleLike}>
          <img src={blogData.liked ? heartRed : heartBlack} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
