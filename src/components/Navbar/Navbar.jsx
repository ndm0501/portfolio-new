import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 90) {
      if (!nav) {
        setNav(true);
      }
    } else {
      setNav(false);
    }
  };
  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <nav className={`nav ${nav && 'nav__sticky'}`}>
      <div className="logo" >
        <img src="/assets/img/avatar.jpg" />
      </div>
      <div className={`navlinks ${showMenu ? 'navlinks-show-menu' : ''}`}>
        <ul >
          <li className="nav-link">
            <Link
              to="home"
              spy
              smooth
              hashSpy
              offset={-100}
              duration={500}
              delay={100}
            >
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="skills"
              spy
              smooth
              hashSpy
              offset={-250}
              duration={500}
              delay={100}>
              Skills
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="about"
              spy
              smooth
              hashSpy
              offset={-100}
              duration={500}
              delay={100}>
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-menu">
        <button onClick={toggleMenu}>
          {!showMenu ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
