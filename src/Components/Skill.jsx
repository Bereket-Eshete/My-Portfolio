import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Skill = () => {
  useEffect(() => {
    // ScrollReveal effect for the contact section
    ScrollReveal().reveal(".contact-card", {
      delay: 200,
      origin: "bottom",
      distance: "60px",
      duration: 2500,
      reset: false, // so the animation runs every time you scroll into view
    });
  }, []);

  const MySkill = [
    { name: "HTML", value: "85%" },
    { name: "CSS", value: "75%" },
    { name: "JavaScript", value: "60%" },
    { name: "ReactJs", value: "75%" },
    { name: "Node & Express", value: "50%" },
    { name: "MYSQL & MONGODB", value: "60%" },
  ];
  return (
    <section class="skills section" id="skills">
      <div class="container flex-center">
        <h1 class="section-title-01">Skills</h1>
        <h2 class="section-title-02">Skills</h2>
        <div class="skills-description">
          <h3>Education & Skills</h3>
          <p>
            for more than years of experience have been accomplishing enough
            with modern web development, new genreation web and app programming
            language.
          </p>
        </div>
        <div class="skills-info education-all">
          <div class="education">
            <h4>
              <label>Skills</label>
            </h4>
            <ul class="bars">
              {MySkill.map((myskill, index) => (
                <li key={index} class="bar">
                  <div class="info">
                    <span>{myskill.name}</span>
                    <span>{myskill.value}</span>
                  </div>
                  <div class="line html"></div>
                </li>
              ))}
            </ul>
          </div>
          <div class="education">
            <h4>
              <label>education</label>
            </h4>
            <ul class="edu-list">
              <li class="item">
                <span class="year">2022-Present</span>
                <p>
                  <span>BSC in Computer Science</span>
                </p>
                <p>Unity Unversity, Addis Ababa, Ethiopia</p>
              </li>
            </ul>
            <br />
            <br />
            <br />
            <div class="education">
              <h4>
                <label>Certificates</label>
              </h4>
              <ul class="edu-list">
                <li class="item">
                  <span class="year">2024</span>
                  <p>
                    <span>Android Developer</span> - Udacity
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
