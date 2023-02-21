import React from "react";
import "./header.css";

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header basic-padding">
      <div className="banner">
        <div className="company-title">The Artifact</div>
        <div className="blog-name">Culture & Art Blog</div>
      </div>
      <div className="nav-bar">
        <nav>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Contact</ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
