import React from "react";
import "./skillCard.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SkillCard = ({ skill: { title, logo } }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      className="skill-card"
      data-aos="fade-down"
      data-aos-offset="-100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <img src={logo} alt={title} width={100} height={100} />
      <p className="skills-heading">{title}</p>
    </div>
  );
};

export default SkillCard;
