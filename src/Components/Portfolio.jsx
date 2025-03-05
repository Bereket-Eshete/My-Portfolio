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
    title: "Authentication System",
    img: Sign, // Ensure abc is properly imported
    detailsImg: [login, verfy, forgate], // Update with the correct image path
    description: `This authentication system provides a secure and robust user authentication mechanism with features such as Signup, Login, Logout, Password Reset, Forgot Password, and Email Verification.  The project was a great learning experience where I explored various security best practices to enhance user authentication and data protection. I implemented JWT (JSON Web Token) and cookie-based sessions for secure authentication and session management.
                   I used those Tech Stack for this project`,
    technologies: `React.js (Frontend) 
       Node.js & Express.js (Backend)
       MongoDB & Mongoose (Database)
       JWT & Cookie Sessions (Security)`,
    link: "https://github.com/Bereket-Eshete/Authentication-System",
  },

  {
    id: 2,
    category: "Front-end Development",
    title: "ABC Book Store",
    img: abc,
    detailsImg: abc,
    // video: "https://www.youtube.com/embed/Uie77sbwWzE",
    description: `This project is a frontend clone of the popular American Book Center (ABC) Book Store website. it was built using HTML, CSS and JavaScript focusing on replicating the design and the user experience of the original site. Through this project, i practiced essiential frontend development techniques including 
    CSS styling: implementing Flexbox and CSS Grid for layout structuring
    Respomsive Design: Ensuring the website adapts to diffrenet screnn size
    JavaScript Interactivity: Adding dynamic elements and enhancing the user experience.
    As my first frontend design project this was a valuable learning experience where i strengthened my understanding of modern styling techinques and frontend development best practices. `,
    link: "https://github.com/Bereket-Eshete/Real-estate-website",
  },
  {
    id: 3,
    category: "Full-Stack Development",
    title: "Real State Website",
    img: gift,
    detailsImg: gift,
    // video: "https://www.youtube.com/embed/L0CCNKdesjU",
    description: `This project is a fully functional realestate website designed to help users explore, list and manage properties online. it was built using a full stack development approche combining both frontend and backend technologies.This project also enhanced my full-stack development skill, practicularly in backend programing with PHP and database management using MySQL it also helped me understand how to integrate frontend and backend seamlessly for a smooth user experience.`,
    link: "https://github.com/Bereket-Eshete/Bank-Management-System",
  },
  {
    id: 4,
    category: "Front-end Development",
    title: "React Project",
    img: todo,
    detailsImg: todo,
    // video: "https://www.youtube.com/embed/84IcqSuBmvg",
    description:
      "This To-Do App was my first project using React where i explored and applied key React cocnepts. it allows users to add,edit,and delete tasks making task management simple and efficient.",
    link: "https://github.com/Bereket-Eshete/React-Project",
  },
  {
    id: 5,
    category: "C++ Project",
    title: "Bank Management System",
    img: bank,
    detailsImg: bank,
    description:
      "This Bank Management System was developed using c++ as part of my computer programming course. The project aimed to simulate basic banking operations, allowing users to manage their accounts efficiently.",
    link: "https://github.com/Bereket-Eshete/prodigy-FS-01",
  },
  {
    id: 6,
    category: "Front-end Development + API",
    title: "Food Recipe",
    description:
      "This Food Recipe app is a frontend web application that allows users to search for diffrent food items and get their corresponding recipes. it was uniqe as it introduced me to API integration and handling real-time data.",
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
