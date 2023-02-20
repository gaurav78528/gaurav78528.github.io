import CarouselSlider from "./CarouselSlider";
import "./tools.css";
import React from "react";

const Tools = () => {
  return (
    <div className="tools-container">
      <h1>Tools</h1>
      <div id="tools">
        <CarouselSlider />
      </div>
    </div>
  );
};

export default Tools;
