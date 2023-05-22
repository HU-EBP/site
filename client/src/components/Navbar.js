import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="../pages/Forum.js">Forum</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
