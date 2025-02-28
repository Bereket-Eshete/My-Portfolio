import React from "react";

const Portfolio = () => {
  return (
    <section class="portfolio section" id="portfolio">
      <div class="container flex-center">
        <h1 class="section-title-01">Portfolio</h1>
        <h2 class="section-title-02">Portfolio</h2>
        <div class="content">
          <div class="portfolio-list">
            <div class="img-card-container">
              <div class="img-card">
                <div class="overlay"></div>
                <div class="info">
                  <h3>Web Design</h3>
                  <span>AirBnB Clone</span>
                </div>
                <img src="image/hbhb-4.png" alt="" />
              </div>
              <div class="portfolio-model flex-center">
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn"></i>
                  <h3>Web Design</h3>
                  <img src="image/hbhb.png" alt="" />
                  <p>
                    AirBnB clone is one of the portfolio project of Alx. with
                    backend (python console, flask APi, json and mysql, flask
                    frame-work). you can get the source code of the project at{" "}
                    <a href="https://github.com/mckienzie7/AirBnB_clone_v4">
                      here.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="img-card-container">
              <div class="img-card">
                <div class="overlay"></div>
                <div class="info">
                  <h3>Event Addis</h3>
                  <span>Event Managment Web App</span>
                </div>
                <img src="image/evtemplate.png.png" alt="" />
              </div>
              <div class="portfolio-model flex-center">
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn"></i>
                  <h3>Event Addis</h3>
                  <iframe
                    width="942"
                    height="530"
                    src="https://www.youtube.com/embed/Uie77sbwWzE?si=zHuqyPRiUwPCr_8h"
                    title="What G-12 Examination looks like."
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p>
                    Event Addis is an event management platform that streamlines
                    event creation, discovery, and participation for users in
                    Addis Ababa.
                    <a href="https://github.com/mckienzie7/Event-Addis">
                      Github.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="img-card-container">
              <div class="img-card">
                <div class="overlay"></div>
                <div class="info">
                  <h3>security</h3>
                  <span>NCH Softwares-Hacking</span>
                </div>
                <img src="image/chips.png" alt="" />
              </div>
              <div class="portfolio-model flex-center">
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn"></i>
                  <h3>Cracking</h3>
                  <iframe
                    width="942"
                    height="530"
                    src="https://www.youtube.com/embed/L0CCNKdesjU"
                    title="how to hack software"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p>
                    This video shows some vulnerability of NCH software, also
                    guide for other developer to test their product before
                    releasing it.
                  </p>
                </div>
              </div>
            </div>
            <div class="img-card-container">
              <div class="img-card">
                <div class="overlay"></div>
                <div class="info">
                  <h3>Security</h3>
                  <span>Icofx-Hacking</span>
                </div>
                <img src="image/reverse.png" alt="" />
              </div>
              <div class="portfolio-model flex-center">
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn"></i>
                  <h3>Cracking</h3>
                  <iframe
                    width="942"
                    height="530"
                    src="https://www.youtube.com/embed/84IcqSuBmvg"
                    title="crack like pro (don't waste your money)."
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p>
                    This video shows some vulnerability of ICOFX software , it's
                    security is better than NCH yet their is some vulnerability.
                  </p>
                </div>
              </div>
            </div>
            <div class="img-card-container">
              <div class="img-card">
                <div class="overlay"></div>
                <div class="info">
                  <h3>Animation</h3>
                  <span>Water-Stream</span>
                </div>
                <img src="image/water.png" alt="" />
              </div>
              <div class="portfolio-model flex-center">
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn"></i>
                  <h3>Animation</h3>
                  <img src="" alt="" />
                  <p>Unavailable Due To Copyright Issue.</p>
                </div>
              </div>
            </div>
            <div class="img-card-container">
              <div class="img-card">
                <div class="overlay"></div>
                <div class="info">
                  <h3>Animation</h3>
                  <span>Art Collection</span>
                </div>
                <img src="image/apple.jpg" alt="" />
              </div>
              <div class="portfolio-model flex-center">
                <div class="portfolio-model-body">
                  <i class="fas fa-times portfolio-close-btn"></i>
                  <h3>Animated Art</h3>
                  <img src="image/apple.jpg" alt="" />
                  <img src="image/poster.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
