import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import about from "../assets/about.png";
import { FaDownload } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(
      ".home .info h2, .section-title-01, .section-title-02",
      {
        delay: 300,
        origin: "left",
        reset: false,
      }
    );
    ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", {
      delay: 400,
      origin: "right",
      reset: false,
    });
    ScrollReveal().reveal(".home .info .btn", {
      delay: 500,
      origin: "bottom",
      reset: false,
    });
    ScrollReveal().reveal(".media-icons i, .contact-left li", {
      delay: 200,
      origin: "left",
      reset: false,
    });
    ScrollReveal().reveal(".home-img, .img, .about-img", {
      delay: 300,
      origin: "bottom",
      reset: false,
    });
    ScrollReveal().reveal(".about , .description, .copy-rght", {
      delay: 400,
      origin: "right",
      reset: false,
    });
    ScrollReveal().reveal(".about, .professional-list li", {
      delay: 300,
      origin: "right",
      interval: 100,
      reset: false,
    });
    ScrollReveal().reveal(".skills-description, .contact-card", {
      delay: 500,
      origin: "left",
      reset: false,
    });
    ScrollReveal().reveal(
      ".experience-card, .education, .portfolio .img-card",
      {
        delay: 600,
        origin: "bottom",
        interval: 100,
        reset: false,
      }
    );
    ScrollReveal().reveal("footer .group", {
      delay: 300,
      origin: "top",
      interval: 100,
      reset: false,
    });
  }, []);

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
                <span>Full-Stack Developer</span> based in <span>Ethiopia</span>
              </h4>
              <p>
                I specialize in building Scalable, user-friendly and efficient
                web application using latest tools and frameworks. with
                expertise in both front-end and back-end development, l love
                solving complex problems and crating seamless digital
                experiences. My goal is to develop high-quality, impactful
                software that enhances user experience and drives innovation.
                Let's build something amazing together!.
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
              href="/Bereket Eshete_CV.pdf"
              download="Bereket Eshete_CV.pdf"
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
