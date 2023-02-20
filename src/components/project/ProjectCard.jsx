import React from "react";
import "./projectCard.css";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const ProjectCard = ({ imgPath, title, description, stack, link, demo }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-up" className="project-card">
      <img src={imgPath} alt={title} width="100%" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          <span className="tech-stack-heading">Tech Stack: </span>
          {stack.map((tech_stack, id) => (
            <span key={id} style={{ textTransform: "capitalize" }}>
              | {tech_stack}{" "}
            </span>
          ))}
        </div>
        <div className="deployed_links">
          <a href={link} target="_blank" rel="noreferrer">
            <AiFillGithub color="black" fontSize={30} />
          </a>
          <a href={demo} target="_blank" rel="noreferrer">
            <AiOutlineEye color="black" fontSize={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
