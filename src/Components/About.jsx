import React from "react";
import about from "../assets/about.png";
const About = () => {
  return (
    <section class="about section" id="about">
      <div class="container flex-center">
        <h1 class="section-title-01">About Me</h1>
        <h2 class="section-title-02">About Me</h2>
        <div class="content flex-center">
          <div class="about-img">
            <img src={about} alt="about" />
          </div>
          <div class="about-info">
            <div class="description">
              <br />
              <h4>
                <span>Back-End Developer</span> based in<span> Ethiopia</span>
              </h4>
              <p>
                I Design and Develop services for customers specializing
                Creating stylish, modern websites, web services and back-end
                role. check out my Portfolio
              </p>
            </div>
            <ul class="proffesional-list">
              <li class="list-item">
                <h3>1+</h3>
                <span>
                  Years of
                  <br />
                  Experience
                </span>
              </li>
              <li class="list-item">
                <h3>5</h3>
                <span>
                  Success
                  <br />
                  Projects
                </span>
              </li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1yK9PvJs8iBoAnD1V5FTo2VWZyEY4tzmS/view?usp=sharing"
              class="btn"
            >
              Download Cv <i class="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
