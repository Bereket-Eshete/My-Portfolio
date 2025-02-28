import { a, li } from "framer-motion/client";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
const Footer = () => {
  const Link = [
    { name: "Home", path: "#home" },
    { name: "Skill", path: "#skill" },
    { name: "About", path: "#about" },
    { name: "portfolio", path: "#portfolio" },
    { name: "contact", path: "contact" },
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
              <a href="https://www.instagram.com/papa.boy_7">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/michael-solomon-0250a8271/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://t.me/Backto2020">
                <FaTelegram />
              </a>
            </li>
            <li>
              <a href="https://github.com/Mckienzie7/">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright group">
        <p> ©️ Persus 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
