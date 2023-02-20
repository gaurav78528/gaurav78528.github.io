import React, { useState } from "react";
import "./navbar.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import Resume from "../home/Gaurav-Suthar-Resume.pdf";

const menuItems = [
  {
    id: 1,
    title: "home",
  },
  {
    id: 2,
    title: "about",
  },
  {
    id: 3,
    title: "skills",
  },
  {
    id: 4,
    title: "project",
  },
  {
    id: 5,
    title: "contact",
  },
  // {
  //   id: 6,
  //   title: "resume",
  // },
];
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <h3 className="logo">Portfolio</h3>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          {menuItems.map((menu) => {
            return (
              <li key={menu.id}>
                <Link to={menu.title} spy={true} smooth={true}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
          <li>
            <a href={Resume} download="Gaurav-Suthar-Resume" target="_blank"  rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
        <button className="mobile-menu-btn">
          {isMobile ? (
            <IoCloseCircleOutline onClick={() => setIsMobile(false)} />
          ) : (
            <FaBars onClick={() => setIsMobile(!isMobile)} />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
