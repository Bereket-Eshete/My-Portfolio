import React, { useState } from "react";

const projects = [
  {
    id: 1,
    category: "Front-end Design",
    title: "ABC Book Store",
    img: "image/hbhb-4.png",
    detailsImg: "image/hbhb.png",
    description:
      "ABC (American Book Center) book store clone is one of the portfolio projects of ALX. It features a backend with Python console, Flask API, JSON, MySQL, and Flask framework.",
    link: "",
  },
  {
    id: 2,
    category: "Event Addis",
    title: "Real State Web App",
    img: "image/evtemplate.png",
    video: "https://www.youtube.com/embed/Uie77sbwWzE",
    description:
      "Event Addis is an event management platform that streamlines event creation, discovery, and participation for users in Addis Ababa. Event Addis is an event management platform that streamlines event creation, discovery, and participation for users in Addis Ababa.",
    link: "https://github.com/mckienzie7/Event-Addis",
  },
  {
    id: 3,
    category: "Security",
    title: "NCH Softwares-Hacking",
    img: "image/chips.png",
    video: "https://www.youtube.com/embed/L0CCNKdesjU",
    description:
      "This video shows some vulnerabilities in NCH software and provides guidance for developers to test their products before release.",
  },
  {
    id: 4,
    category: "Security",
    title: "Icofx-Hacking",
    img: "image/reverse.png",
    video: "https://www.youtube.com/embed/84IcqSuBmvg",
    description:
      "This video demonstrates some vulnerabilities in ICOFX software. While its security is better than NCH, there are still weaknesses.",
  },
  {
    id: 5,
    category: "Animation",
    title: "Water-Stream",
    img: "image/water.png",
    description: "Unavailable Due To Copyright Issue.",
  },
  {
    id: 6,
    category: "Animation",
    title: "Art Collection",
    img: "image/apple.jpg",
    detailsImg: ["image/apple.jpg", "image/poster.jpg"],
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
            {selectedProject.video && (
              <iframe
                width="942"
                height="530"
                src={selectedProject.video}
                title={selectedProject.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <p>{selectedProject.description}</p>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
