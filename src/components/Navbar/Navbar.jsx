import React, { useState, forwardRef, useRef } from "react";
import "./navbar.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
// import { NavHashLink as Link } from "react-router-hash-link";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

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
  {
    id: 6,
    title: "resume",
  },
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
              // to={`#${menu.title}`}
            );
          })}
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

// // import React, { useContext } from "react";
// import React, { useContext, useEffect } from "react";
// import Toggle from "../Toggle/Toggle";
// import "./Navbar.css";
// import { Link } from "react-scroll";
// import D1 from '../../img/D1.png'

// import { themeContext } from "../../Context";
// import { GoThreeBars } from 'react-icons/go';
// import { RiCloseCircleFill } from 'react-icons/ri';

// import Aos from "aos";
// import 'aos/dist/aos.css';

// const Navbar = () => {

//   const [nav, setNav]= React.useState(false)

//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   // style={{ color: darkMode ? "white" : "" }}

//   useEffect(()=>{
//     Aos.init({duration: 2000 });
//   }, []);

//   return (
//     <div className="Nav-main" style={{ color: darkMode ? "white" : "" }}>

//       <div className="n-wrapper" id="Navbar" style={{ color: darkMode ? "white" : "" , backgroundColor: darkMode ? "#0f1624" : "white" }}>
//         <div className="n-left" style={{color: darkMode ? "white" : "", backgroundColor: darkMode ? "#0f1624" : "white" }}>
//         <Link to="intro" spy={true} smooth={true} className='list'>
//           <img src={D1} alt="d" className="n-name"  data-aos="slide-left"/>
//           </Link>
//           <Toggle className='toggle' />

//         </div>
//         <div className="n-right">
//           <div className="n-list">
//             <ul style={{ listStyleType: "none" }} activeClass="active">
//               <li>
//                 <Link to="intro" spy={true} smooth={true} className='list'>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="services" spy={true} smooth={true} className='list'>
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="works" spy={true} smooth={true} className='list' >
//                   Skills
//                 </Link>
//               </li>
//               <li>
//                 <Link to="portfolio" spy={true} smooth={true} className='list'>
//                   Projects
//                 </Link>
//               </li>
//               {/* <li>
//               <Link to="testimonial" spy={true} smooth={true} className='list'>
//                 Blogs
//               </Link>
//             </li> */}
//               <li>
//                 <Link to="contact" spy={true} smooth={true} className='list'>
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

// <div className="hide_menu">

//   <GoThreeBars onClick={()=>{setNav(!nav)
//   // console.log(nav)
// }
// } style={{transition:"2s", cursor:"pointer"}}/>

// </div>

//   <ul className={!nav ? "new_hide" : "Show_li"} >
//   <RiCloseCircleFill onClick={()=>{setNav(!nav)
//   // console.log(nav)
// }
// } style={{marginLeft:"0px", cursor:"pointer", top:"0"}}/>
// <h5 className="hide_name animate-bounce ">Debobrota</h5>
//               <li>
//                 <Link activeClass="active" to="intro" spy={true} smooth={true} className='list'>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="services" spy={true} smooth={true} className='list'>
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="works" spy={true} smooth={true} className='list' >
//                   Skills
//                 </Link>
//               </li>
//               <li>
//                 <Link to="portfolio" spy={true} smooth={true} className='list'>
//                   Projects
//                 </Link>
//               </li>
//               {/* <li>
//               <Link to="testimonial" spy={true} smooth={true} className='list'>
//                 Blogs
//               </Link>
//             </li> */}
//               <li>
//                 <Link to="contact" spy={true} smooth={true} className='list'>
//                   Contact
//                 </Link>
//               </li>
//             </ul>

//           {/* <Link to="contact" spy={true} smooth={true}>
//         <p className="button n-button">Contact</p>
//         </Link> */}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Navbar;
