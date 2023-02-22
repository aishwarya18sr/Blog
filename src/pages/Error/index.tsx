import React from "react";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../../components";
import "./error.css";

const Home: React.FC = () => {
  const { errorCode } = useParams();
  return (
    <div>
      <Header />
      <div className="errorContainer">
        <p>{`${errorCode}. Error occured while fetching the data`}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
