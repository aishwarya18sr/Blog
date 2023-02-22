import React from "react";
import { Footer, Header } from "../../components";
import "./pageNotFound.css";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="pageNotFoundContainer">
        <p>404 Error. Page not found</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
