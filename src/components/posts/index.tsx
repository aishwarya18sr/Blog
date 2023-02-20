import posts from "../../assets/index.json";
import Post from "./post";

import "./posts.style.css";

interface CardProp {
    image: string;
    date: string;
    readingTime: string;
    title: string;
    description: string;
    claps: number;
    liked: boolean;
}

const Posts = () => {
    return (
        <div className="posts basic-padding">
            {posts.map((post: CardProp) => {
                return <Post {...post}/>;
            })
            }
        </div>  
    )
}
    
export default Posts;