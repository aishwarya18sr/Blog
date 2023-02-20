import React from "react";

import clap from "../../../assets/icons/clapping.svg"
import heartBlack from "../../../assets/icons/heart-black.svg"
import heartRed from "../../../assets/icons/heart-red.svg"

import "./post.style.css";

interface CardProp {
    image: string;
    date: string;
    readingTime: string;
    title: string;
    description: string;
    claps: number;
    liked: boolean;
}

const Post: React.FC<CardProp> = (prop) => {

    const image = require(`../../../assets/images/${prop.image}`);

    const [claps, setClaps] = React.useState(prop.claps);
    const [liked, setLiked] = React.useState(prop.liked);

    const handleClap = () => {
        setClaps(claps + 1);
    };

    const handleLike = () => {
        setLiked(!liked);
    };
    console.log(image)

    return (
        <div className="post">
            <div className="post-image">
                <img src={image} alt="" />
            </div>
            <div className="post-content post-padding">
                <div className="post-meta">
                    <div className="post-date">{prop.date}</div>
                    <div className="post-reading-time">{prop.readingTime}</div>
                </div>
                <div className="post-title">{prop.title}</div>
                <div className="post-description">{prop.description}</div>
            </div>
            <div className="post-engagements post-padding">
                <div className="clap" onClick={handleClap}>
                    <div className="clap-icon"><img src={clap} alt="" /></div>
                    <div className="clap-counter">{claps}</div>
                </div>
                <div className="like" onClick={handleLike}>
                    <img src={liked ? heartRed : heartBlack} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Post;