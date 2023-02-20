import React from "react";

import "./about.css";
const About = () => {
  return (
    <div style={{ padding: "40px 0" }}>
      <h1 id="about" className="heading">
        All <span className="heading-highlight">About</span> Me
      </h1>
      <div className="about-container">
        <ul>
          <li>
            Hello! My name Gaurav Suthar and I enjoy creating things that live
            on the internet.
          </li>
          <li>
            I'm a passionate Developer, with strong administrative and
            communication skills, good attention to detail and the ability to
            write efficient code using MERN Stack.
          </li>
          <li>
            My interest in Web Development started back last year when I was
            trying to edit things on the web, that taught me a lot about HTML &
            CSS.
          </li>
          <li>
            As I grow and flourish as a Developer, one thing which keeps me
            going is my inquisitiveness for discovering new things every day.
          </li>
          <li>
            Fast Forwarding to today, I built a number of web applications and 4
            major projects. Learned a great deal about teamwork, leadership, and
            communication. After months of rigorous training, here I am looking
            for an opportunity as a full stack web developer.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
