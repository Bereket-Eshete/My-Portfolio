import React from "react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <div class="nav-bar">
        <a href="#" class="logo">
          Bereket
        </a>
        <div class="navigation">
          <div class="nav-items">
            <div class="nav-close-btn"></div>
            <a class="active" href="#home">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div class="nav-menu-btn"></div>
      </div>
    </header>
  );
};

export default Header;
