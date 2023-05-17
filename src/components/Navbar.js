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
      <nav ref={navRef} aria-label="Main Navigation">
        <a href="/#" aria-current="page">
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
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
          aria-label="Close Navigation"
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}
        aria-label="Open Navigation"
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
