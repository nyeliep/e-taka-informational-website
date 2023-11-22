import React, { useState, useEffect } from "react";
import './style.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop
      });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeSection, setActiveSection] = useState('#home');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sections = ['#home', '#services', '#about', '#reviews', '#team', '#contact'];

    for (const section of sections) {
      const element = document.querySelector(section);
      if (element && scrollY >= element.offsetTop && scrollY < element.offsetTop + element.offsetHeight) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="images/logo.png" alt="Logo" />
      </div>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <span
              className={activeSection === '#home' ? 'active' : ''}
              onClick={() => scrollToSection('#home')}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className={activeSection === '#services' ? 'active' : ''}
              onClick={() => scrollToSection('#services')}
            >
              Services
            </span>
          </li>
          <li>
            <span
              className={activeSection === '#about' ? 'active' : ''}
              onClick={() => scrollToSection('#about')}
            >
              About
            </span>
          </li>
          <li>
            <span
              className={activeSection === '#reviews' ? 'active' : ''}
              onClick={() => scrollToSection('#reviews')}
            >
              Reviews
            </span>
          </li>
          <li>
            <span
              className={activeSection === '#team' ? 'active' : ''}
              onClick={() => scrollToSection('#team')}
            >
              Team
            </span>
          </li>
          <li>
            <span
              className={activeSection === '#contact' ? 'active' : ''}
              onClick={() => scrollToSection('#contact')}
            >
              Contact
            </span>
          </li>
        </ul>
      </div>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
