import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "../components/Navbar.css";
import "../index.css";
import Forum from "../pages/Forum";

function Navbar() {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("_id");
    //👇🏻 redirects to the login page
    navigate("/");
  };

  const isUserLoggedIn = () => {
    if (localStorage.getItem("_id")) {
      return true;
    }
    return false;
  };

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
          <li>
            <button onClick={signOut}>
              {isUserLoggedIn ? "Sign out" : "Sign in"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
