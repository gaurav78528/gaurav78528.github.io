import React from "react";
import SkillCard from "./SkillCard";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import typescript from "../../images/typescript.png";
import chakraui from "../../images/chakraui.png";
import nodejs from "../../images/nodejs.svg";
import express from "../../images/express.svg";
import mongoDB from "../../images/mongoDB.svg";
import git from "../../images/git.svg";
import npm from "../../images/npm.svg";
import "./skills.css";
let skillsArr = [
  {
    id: 1,
    title: "html",
    logo: html,
  },
  {
    id: 2,
    title: "css",
    logo: css,
  },
  {
    id: 3,
    title: "javascript",
    logo: javascript,
  },
  {
    id: 4,
    title: "react",
    logo: react,
  },
  {
    id: 5,
    title: "redux",
    logo: redux,
  },
  {
    id: 6,
    title: "typescript",
    logo: typescript,
  },
  {
    id: 7,
    title: "chakra ui",
    logo: chakraui,
  },
  {
    id: 8,
    title: "node js",
    logo: nodejs,
  },
  {
    id: 9,
    title: "express",
    logo: express,
  },
  {
    id: 10,
    title: "mongo db",
    logo: mongoDB,
  },
  {
    id: 11,
    title: "git",
    logo: git,
  },
  {
    id: 12,
    title: "npm",
    logo: npm,
  },
];
const Skills = () => {
  return (
    <div className="skills">
      <div 
      // style={{ width: "70%", margin: "auto",border:"1px solid blue" }}
      >
        <h1 id="skills" className="heading">
          My <span className="heading-highlight">Technical</span> Skills
        </h1>
        <div className="skills-container">
          {skillsArr.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
