import { img, link } from "framer-motion/client";
import React, { useState } from "react";
import abc from "../assets/abc-book-store.png";
import Sign from "../assets/Sign.png";
import login from "../assets/login.png";
import gift from "../assets/gift.png";
import todo from "../assets/todo.png";
import bank from "../assets/bank.png";
import food from "../assets/food.png";
import verfy from "../assets/verfy.png";
import forgate from "../assets/forgate.png";
const projects = [
  {
    id: 1,
    category: "Security",
    title: "Authentication App",
    img: Sign,
    detailsImg: [login, verfy, forgate],
    description:
      "ABC (American Book Center) book store clone is one of the portfolio projects of ALX. It features a backend with Python console, Flask API, JSON, MySQL, and Flask framework.",
    link: "https://github.com/Bereket-Eshete/ABC-Book-store",
  },
  {
    id: 2,
    category: "Full-Stack project",
    title: "Real State Web App",
    img: abc,
    detailsImg: abc,
    // video: "https://www.youtube.com/embed/Uie77sbwWzE",
    description:
      "Event Addis is an event management platform that streamlines event creation, discovery, and participation for users in Addis Ababa. Event Addis is an event management platform that streamlines event creation, discovery, and participation for users in Addis Ababa.",
    link: "https://github.com/Bereket-Eshete/Real-estate-website",
  },
  {
    id: 3,
    category: "Security",
    title: "NCH Softwares-Hacking",
    img: gift,
    detailsImg: gift,
    // video: "https://www.youtube.com/embed/L0CCNKdesjU",
    description:
      "This video shows some vulnerabilities in NCH software and provides guidance for developers to test their products before release.",
    link: "https://github.com/Bereket-Eshete/Bank-Management-System",
  },
  {
    id: 4,
    category: "Security",
    title: "Icofx-Hacking",
    img: todo,
    detailsImg: todo,
    // video: "https://www.youtube.com/embed/84IcqSuBmvg",
    description:
      "This video demonstrates some vulnerabilities in ICOFX software. While its security is better than NCH, there are still weaknesses.",
    link: "https://github.com/Bereket-Eshete/React-Project",
  },
  {
    id: 5,
    category: "Animation",
    title: "Water-Stream",
    img: bank,
    detailsImg: bank,
    description: "Unavailable Due To Copyright Issue.",
    link: "https://github.com/Bereket-Eshete/prodigy-FS-01",
  },
  {
    id: 6,
    category: "Animation",
    title: "Art Collection",
    img: food,
    detailsImg: food,
    link: "https://github.com/Bereket-Eshete/PRODIGY-FS-02",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.classList.add("modal-open"); // Prevent scrolling on main page
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove("modal-open"); // Re-enable scrolling on main page
  };

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container flex-center">
        <h1 className="section-title-01">Portfolio</h1>
        <h2 className="section-title-02">Portfolio</h2>
        <div className="content">
          <div className="portfolio-list">
            {projects.map((project) => (
              <div key={project.id} className="img-card-container">
                <div className="img-card" onClick={() => openModal(project)}>
                  <div className="overlay"></div>
                  <div className="info">
                    <h3>{project.category}</h3>
                    <span>{project.title}</span>
                  </div>
                  <img src={project.img} alt={project.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="portfolio-modal-overlay">
          <div className="portfolio-modal">
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <h3>{selectedProject.category}</h3>
            <h2>{selectedProject.title}</h2>
            {selectedProject.detailsImg ? (
              Array.isArray(selectedProject.detailsImg) ? (
                selectedProject.detailsImg.map((img, index) => (
                  <img key={index} src={img} alt="Project details" />
                ))
              ) : (
                <img src={selectedProject.detailsImg} alt="Project details" />
              )
            ) : null}
            {/* {selectedProject.video && (
              // <iframe
              //   width="942"
              //   height="530"
              //   src={selectedProject.video}
              //   title={selectedProject.title}
              //   frameBorder="0"
              //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //   allowFullScreen
              // ></iframe>
            )} */}
            <p>{selectedProject.description}</p>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
