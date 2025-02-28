import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import about from "../assets/about.png";
import { FaDownload } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    // ScrollReveal configuration to trigger animations on scroll
    ScrollReveal().reveal(
      ".home .info h2, .section-title-01, .section-title-02",
      {
        delay: 300,
        origin: "left",
        reset: true, // Ensures animation happens every time we scroll
      }
    );
    ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", {
      delay: 400,
      origin: "right",
      reset: true,
    });
    ScrollReveal().reveal(".home .info .btn", {
      delay: 500,
      origin: "bottom",
      reset: true,
    });
    ScrollReveal().reveal(".media-icons i, .contact-left li", {
      delay: 200,
      origin: "left",
      reset: true,
    });
    ScrollReveal().reveal(".home-img, .img, .about-img", {
      delay: 300,
      origin: "bottom",
      reset: true,
    });
    ScrollReveal().reveal(".about , .description, .copy-rght", {
      delay: 400,
      origin: "right",
      reset: true,
    });
    ScrollReveal().reveal(".about, .professional-list li", {
      delay: 300,
      origin: "right",
      interval: 100,
      reset: true,
    });
    ScrollReveal().reveal(".skills-description, .contact-card", {
      delay: 500,
      origin: "left",
      reset: true,
    });
    ScrollReveal().reveal(
      ".experience-card, .education, .portfolio .img-card",
      {
        delay: 600,
        origin: "bottom",
        interval: 100,
        reset: true,
      }
    );
    ScrollReveal().reveal("footer .group", {
      delay: 300,
      origin: "top",
      interval: 100,
      reset: true,
    });
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <h1 className="section-title-01">About Me</h1>
        <h2 className="section-title-02">About Me</h2>
        <div className="content flex-center">
          <div className="about-img">
            <img src={about} alt="about" />
          </div>
          <div className="about-info">
            <div className="description">
              <h4>
                <span>Back-End Developer</span> based in <span>Ethiopia</span>
              </h4>
              <p>
                I Design and Develop services for customers specializing in
                creating stylish, modern websites, web services, and back-end
                role.
              </p>
            </div>
            <ul className="proffesional-list">
              <li className="list-item">
                <h3>1+</h3>
                <span>Years of Experience</span>
              </li>
              <li className="list-item">
                <h3>5</h3>
                <span>Success Projects</span>
              </li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1yK9PvJs8iBoAnD1V5FTo2VWZyEY4tzmS/view?usp=sharing"
              className="btn"
            >
              Download Cv <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
