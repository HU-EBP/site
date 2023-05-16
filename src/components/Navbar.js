import React, { useRef } from "react";
import {
  FaBars,
  FaGamepad,
  FaHome,
  FaQuestion,
  FaSpeakap,
  FaTimes,
} from "react-icons/fa";
import "../components/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/#">
          <FaHome /> Home
        </a>
        <a href="/#">
          <FaGamepad /> Spark
        </a>
        <a href="/#">
          <FaQuestion /> FAQ
        </a>
        <a href="/#">
          <FaSpeakap /> Forum
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button lassName="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

// Test
