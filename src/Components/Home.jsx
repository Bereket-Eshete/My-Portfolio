import React from "react";
import profile from "../assets/profile.jpg";
const Home = () => {
  return (
    <section class="home flex-center" id="home">
      <div class="home-container">
        <div class="media-icons">
          <a href="https://www.linkedin.com/in/michael-solomon-0250a8271/">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/papa.boy_7">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/Mckienzie7/">
            <i class="fab fa-github"></i>
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
          <a href="mailto:michaelelsa12@gmail.com.com" class="btn">
            Contact Me <i class="fas fa-arrow-circle-right"></i>
          </a>
        </div>
        <div class="home-img">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <a href="#about" class="scroll-down">
        Scroll Down <i class="fas fa-arrow-down"></i>
      </a>
    </section>
  );
};

export default Home;
