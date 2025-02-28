import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      // Detect current section on scroll
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 50;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click to change active section
  const handleLinkClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // Close the menu after clicking
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="nav-bar">
        <a href="#" className="logo">
          Bereket
        </a>

        <div className={`navigation ${menuOpen ? "active" : ""}`}>
          <div className="nav-items">
            {menuOpen && (
              <div className="nav-close-btn" onClick={() => setMenuOpen(false)}>
                <FaTimes style={{ color: "#59d187", fontSize: "24px" }} />
              </div>
            )}
            <a
              className={activeSection === "home" ? "active" : ""}
              href="#home"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
            <a
              className={activeSection === "about" ? "active" : ""}
              href="#about"
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
            <a
              className={activeSection === "skills" ? "active" : ""}
              href="#skills"
              onClick={() => handleLinkClick("skills")}
            >
              Skills
            </a>
            <a
              className={activeSection === "portfolio" ? "active" : ""}
              href="#portfolio"
              onClick={() => handleLinkClick("portfolio")}
            >
              Portfolio
            </a>
            <a
              className={activeSection === "contact" ? "active" : ""}
              href="#contact"
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </div>
        </div>

        {!menuOpen && (
          <div className="nav-menu-btn" onClick={() => setMenuOpen(true)}>
            <FaBars style={{ color: "#59d187", fontSize: "24px" }} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
