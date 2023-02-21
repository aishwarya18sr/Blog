import React, { useState } from "react";
import clap from "../../assets/icons/clapping.svg";
import heartBlack from "../../assets/icons/heart-black.svg";
import heartRed from "../../assets/icons/heart-red.svg";
import { BlogData } from "../../types";
import "./postCard.css";

const PostCard: React.FC<BlogData> = (blogData) => {
  const image = require(`../../assets/images/${blogData?.image}`);
  const [claps, setClaps] = useState<number>(blogData?.claps ?? 0);
  const [liked, setLiked] = useState<boolean>(blogData?.liked ?? false);

  const handleClap = () => {
    setClaps(claps + 1);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post-image">
        <img src={image} alt="" />
      </div>
      <div className="post-content post-padding">
        <div className="post-meta">
          <div className="post-date">{blogData?.date}</div>
          <div className="post-reading-time">{blogData?.readingTime}</div>
        </div>
        <div className="post-title">{blogData?.title}</div>
        <div className="post-description">{blogData?.description}</div>
      </div>
      <div className="post-engagements post-padding">
        <div className="clap" onClick={handleClap}>
          <div className="clap-icon">
            <img src={clap} alt="" />
          </div>
          <div className="clap-counter">{claps}</div>
        </div>
        <div className="like" onClick={handleLike}>
          <img src={liked ? heartRed : heartBlack} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
