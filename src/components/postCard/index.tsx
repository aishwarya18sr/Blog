import React, { Dispatch, SetStateAction } from "react";
import clap from "../../assets/icons/clapping.svg";
import heartBlack from "../../assets/icons/heart-black.svg";
import heartRed from "../../assets/icons/heart-red.svg";
import { UPDATE_CLAP, UPDATE_LIKE } from "../../constants/apiEndPoints";
import { BlogData } from "../../types";
import makeRequest from "../../utils/makeReuqest";
import "./postCard.css";

interface PostCardProp {
  blogData: BlogData;
  setIsRefreshData: Dispatch<SetStateAction<boolean>>;
}

const PostCard: React.FC<PostCardProp> = ({ blogData, setIsRefreshData }) => {
  const image = require(`../../assets/images/${blogData.image}`);

  const handleClap = async () => {
    // await makeRequest(UPDATE_CLAP(blogData?.id ?? 0));
    setIsRefreshData(true);
  };

  const handleLike = async () => {
    // await makeRequest(UPDATE_LIKE(blogData?.id ?? 0));
    setIsRefreshData(true);
  };

  return (
    <div className="post">
      <div className="post-image">
        <img src={image} alt="" />
      </div>
      <div className="post-content post-padding">
        <div className="post-meta">
          <div className="post-date">{blogData.date}</div>
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
          <div className="clap-counter">{blogData.claps}</div>
        </div>
        <div className="like" onClick={handleLike}>
          <img src={blogData.liked ? heartRed : heartBlack} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
