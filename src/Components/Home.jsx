import React from "react";
// import profile from "../assets/profile.jpg";
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
          <a href="https://www.linkedin.com/in/michael-solomon-0250a8271/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/papa.boy_7">
            <FaInstagram />
          </a>
          <a href="https://github.com/Mckienzie7/">
            <FaGithub />
          </a>

          <a href="https://t.me/Backto2020">
            <FaTelegram />
          </a>
        </div>
        <div class="info">
          <h2>Hi,</h2>
          <h2>I'm Bereket</h2>
          <h3>Full Stack Web Developer</h3>
          <p>
            Creating Stunning websites for you with security, back-end and CI/CD
          </p>
          <br />
          <p>..................................</p>
          <a href="mailto:bereketeshete63@gmail.com" class="btn">
            Contact Me <FaArrowCircleRight />
          </a>
        </div>
        <div class="home-img">
          <img src="" alt="profile" />
        </div>
      </div>
      <a href="#about" class="scroll-down">
        Scroll Down
        <FaArrowDown color="#59d187" />
      </a>
    </section>
  );
};

export default Home;
