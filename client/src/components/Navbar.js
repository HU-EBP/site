import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../components/Navbar.css";
import Forum from "../pages/Forum";

function Navbar() {
  return (
    <header>
      <h3>Spark</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
