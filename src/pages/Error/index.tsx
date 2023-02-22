import React from "react";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../../components";
import "./error.css";

const Error: React.FC = () => {
  const { errorCode } = useParams();
  return (
    <div>
      <Header />
      <div className="errorContainer">
        <p>Something went wrong!</p>
        {errorCode && <p>{`Error code: ${errorCode}`}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Error;
