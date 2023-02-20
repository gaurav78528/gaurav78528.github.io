import React from "react";
// import AOS from 'aos';
import "./project.css";
import ProjectCard from "./ProjectCard";
import myGlamm from "../../assets/myGlamm.png";
import wrike from "../../assets/wrike.png";
import spartaFitness from "../../assets/spartaFitness.png";
import netflix from "../../assets/netflix.png";
const projects = [
  {
    imgPath: wrike,
    title: "Wrike Clone",
    description:
      "Wrike is an easy-to-use tool for streamlining the internal project management and collaboration processes between team members.",
    link: "https://github.com/Durgesh9871/Wrike_Clone",
    demo: "https://wrike9871.netlify.app/",
    stack: ["Html", "Css", "JavaScript"],
  },
  {
    imgPath: myGlamm,
    title: "MyGlamm Clone",
    description:
      "MyGlamm is an Indian e-commerce company that sells cosmetics and personal care products. Using this website clone user can login, view products of differnet categoties and user can do Add to cart ",
    link: "https://github.com/gaurav78528/my_glamm_clone/tree/main/zia-cosmetic",
    demo: "https://incandescent-lollipop-850293.netlify.app/",
    stack: ["Css", "React", "JavaScript"],
  },
  {
    imgPath: netflix,
    title: "Netflix Clone",
    description:
      "Netflix provides internet entertainment services for watching movies and television shows. Using this website clone user can SignUp and login, search for movies, user will be able see the popular movies, upcoming movies, etc.",
    link: "https://github.com/gaurav78528/netflix_clone/tree/main/netflix-clone",
    demo: "https://netflix-clone-azure-three.vercel.app/",
    stack: ["Css", "JavaScript", "React"],
  },
  {
    imgPath: spartaFitness,
    title: "Sparta Fitness Club",
    description:
      "Sparta Fitness Club is an digital fitness content publisher. It offers individual workouts and workout plans.",
    link: "https://github.com/gaurav78528/gray-system-3325",
    demo: "https://gray-system-3325.vercel.app/",
    stack: ["css", "JavaScript", "React JS", "Redux", "Chakra UI"],
  },
];

const Project = () => {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <h1 id="project" className="heading">
        My <span className="heading-highlight">Project</span> Section
      </h1>
      <div className="project-container">
        {/* // <div>hello world</div>
        // <div></div>
        // <div></div>
        // <div>hello world</div>
        // <div></div>
        // <div></div>
        // <div>hello world</div>
        // <div></div>
        // <div></div> */}
        {projects.map(({ title, imgPath, description, stack, link, demo }) => (
          <ProjectCard
            key={title}
            title={title}
            imgPath={imgPath}
            description={description}
            stack={stack}
            link={link}
            demo={demo}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
