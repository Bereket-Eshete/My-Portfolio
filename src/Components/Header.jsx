import React from "react";

const Header = () => {
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
