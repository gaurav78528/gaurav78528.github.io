import React from "react";
import "./home.css";
import Type from "./Type";
import Resume from "./Gaurav-Suthar-Resume.pdf";
const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Gaurav Suthar</div>
          <div className="text-3">
            And I'm a
            <span>
              <Type />
            </span>
          </div>
          <div className="btn">
            <a href={Resume} download="Gaurav-Suthar-Resume" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/107467642?s=400&u=203f167df1577073f2142c7f8cc91082fcdd904f&v=4"
          alt="user_avatar"
        />
      </div>
    </div>
  );
};

export default Home;
