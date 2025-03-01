import React, { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Contact = () => {
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

  return (
    <section className="get-in-touch sub-section" id="contact">
      <div className="container">
        <div className="content flex-center">
          <div className="contact-card flex-center">
            <div className="title">
              <h4>Let's Talk</h4>
              <h3>About Your</h3>
              <h2>Next Projects</h2>
            </div>
            <div className="contact-btn">
              <a href="https://t.me/@BereketEshete" className="btn">
                Get in Touch <FaPaperPlane />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
