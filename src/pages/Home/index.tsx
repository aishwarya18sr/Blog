import React from "react";
import { BlogPosts, Footer, Header } from "../../components";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <BlogPosts />
      <Footer />
    </div>
  );
};

export default Home;
