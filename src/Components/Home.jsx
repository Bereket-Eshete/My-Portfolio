import React from "react";
import profile1 from "../assets/profile1.jpg";
import {
  FaArrowDown,
  FaArrowCircleRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
const Home = () => {
  return (
    <section class="home flex-center" id="home">
      <div class="home-container">
        <div class="media-icons">
          <a href="https://www.linkedin.com/in/bereket-eshete-7171a0323">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/bereket.eshete/">
            <FaInstagram />
          </a>
          <a href="https://github.com/Bereket-Eshete">
            <FaGithub />
          </a>

          <a href="https://t.me/@BereketEshete">
            <FaTelegram />
          </a>
        </div>
        <div class="info">
          <h2>Hi,</h2>
          <h2>I'm Bereket</h2>
          <h3>Full Stack Web Developer</h3>
          <p>
            Building modern, Scalable web application with the latest
            technologies To deliver seamless and efficient digital experiences.
          </p>
          <br />
          <p>..................................</p>
          <a href="mailto:bereketeshete63@gmail.com" class="btn">
            Contact Me <FaArrowCircleRight />
          </a>
        </div>
        <div class="home-img">
          <img src={profile1} alt="profile" />
        </div>
      </div>
      <a href="#about" class="scroll-down">
        Scroll Down <FaArrowDown color="#59d187" />
      </a>
    </section>
  );
};

export default Home;
