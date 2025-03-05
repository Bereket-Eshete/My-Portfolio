import { img, link } from "framer-motion/client";
import React, { useState } from "react";
import projects from "../Data/ProjectData.js";

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
            <p className="description">{selectedProject.description}</p>
            <p>{selectedProject.technologies}</p>
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
