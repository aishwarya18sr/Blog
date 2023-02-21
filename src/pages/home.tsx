import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Posts } from "../components";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
