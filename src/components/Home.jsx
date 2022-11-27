import React from "react";
import About from "./About";
import "./home.css";
const Home = () => {
  return (
    <div id="home" className="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Gaurav Suthar</div>
          <div className="text-3">
            And I'm a <span>Full Stack Web Developer.</span>
          </div>
          <button>Resume</button>
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
