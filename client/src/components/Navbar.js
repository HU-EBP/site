import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import bars and x icons
import { FaBars } from "react-icons/fa";
import "../components/Navbar.css";
import "../index.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("_id");
    alert("You have been signed out");
    // Navigate to the home page
    navigate("/");
  };

  const isUserLoggedIn = () => {
    if (localStorage.getItem("_id")) {
      return true;
    }
    return false;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <h3>
        <Link to="/"> Spark </Link>
      </h3>
      <nav className={isOpen ? "responsive_nav" : ""}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/chat" onClick={toggleMenu}>
              Chat
            </Link>
          </li>
          <li>
            <Link to="/forum" onClick={toggleMenu}>
              Forum
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            {isUserLoggedIn() ? (
              <button onClick={signOut}>Sign out</button>
            ) : (
              <a href="/login">
                <button>Sign in</button>
              </a>
            )}
          </li>
        </ul>
        <button onClick={toggleMenu} className="nav-btn">
          {isOpen ? "X" : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
