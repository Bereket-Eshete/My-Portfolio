import { a, li } from "framer-motion/client";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
const Footer = () => {
  const Link = [
    { name: "Home", path: "#home" },
    { name: "Skill", path: "#skills" },
    { name: "About", path: "#about" },
    { name: "portfolio", path: "#portfolio" },
    { name: "contact", path: "#contact" },
  ];
  return (
    <footer>
      <div class="footer-container">
        <div class="about group">
          <h2>Bereket Eshete</h2>
          <p>Full Stack Web Developer</p>
        </div>
        <div class="hr"></div>
        <div class="info group">
          <h3 className="more">- - - - - - More - - - - - -</h3>
          <ul>
            {Link.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div class="hr"></div>
        <div class="follow group">
          <h3>Follow</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/bereket.eshete/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bereket-eshete-7171a0323">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://t.me/@BereketEshete">
                <FaTelegram />
              </a>
            </li>
            <li>
              <a href="https://github.com/Bereket-Eshete">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright group">
        <p> ©️ 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
