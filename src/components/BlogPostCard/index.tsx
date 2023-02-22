import React, { useState } from "react";
import clap from "../../assets/icons/clapping.svg";
import heartBlack from "../../assets/icons/heart-black.svg";
import heartRed from "../../assets/icons/heart-red.svg";
import { BlogData } from "../../types";
import { getFormattedDateFromUtcDate } from "../../utils/common";
import "./blogPostCard.css";

interface BlogPostCardProp {
  blogData: BlogData;
}

const BlogPostCard: React.FC<BlogPostCardProp> = ({ blogData }) => {
  const [clapCount, setClapCount] = useState(blogData.claps);
  const [isLiked, setIsLiked] = useState(blogData.liked);

  const handleClap = () => {
    setClapCount(clapCount + 1);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const imagePath = require(`../../assets/images/${blogData.image}`);

  return (
    <div className="post">
      <div className="post-image">
        <img src={imagePath} alt="" />
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
        <div className="clap" onClick={handleClap}>
          <div className="clap-icon">
            <img src={clap} alt="clap" />
          </div>
          <div className="clap-counter">{clapCount}</div>
        </div>
        <div className="like" onClick={handleLike}>
          <img src={isLiked ? heartRed : heartBlack} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
