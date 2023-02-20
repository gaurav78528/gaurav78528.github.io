import React from "react";
import { useEffect } from "react";
import "./contact.css";
import Aos from "aos";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="contact">
        <h1 id="contact" className="heading">
          <span className="heading-highlight">Contact</span> Me
        </h1>
        <div
          className="contact-container"
          // data-aos="flip-up"
          // data-aos="fade-down"
          // data-aos-easing="linear"
          // data-aos-duration="1000"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <form
            action="https://formspree.io/f/mlevqllk"
            method="POST"
            className="contact-form"
          >
            <input
              type="text"
              name="username"
              autoComplete="off"
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              cols="30"
              rows="10"
              autoComplete="off"
              required
            ></textarea>
            <button>Submit</button>
          </form>
        </div>

        <div className="contact-links">
          <div>
            <a href="https://www.linkedin.com/in/gaurav-suthar-4249aa246/">
              <AiOutlineLinkedin fontSize="50px" />
            </a>
            <a href="https://github.com/gaurav78528">
              <AiOutlineGithub fontSize="50px" />
            </a>
          </div>
          <div className="contact-info">
            <AiOutlineMail fontSize="30px" />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto: gaurav785280@gmail.com"
            >
              gaurav785280@gmail.com
            </a>
          </div>
          <div>
            <FiPhone fontSize="30px" /> <span>+91 8955416545</span>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Designed and build by Gaurav Suthar, 2022 All Rights Reserved.</p>
        
      </div>
    </>
  );
};

export default Contact;
