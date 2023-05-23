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
  };

  const isUserLoggedIn = () => {
    if (localStorage.getItem("_id")) {
      return null;
    }
    return <Link to="/login">Sign in</Link>;
  };

  return (
    <header>
      <h3>
        <Link to="/"> Spark </Link>
      </h3>
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
              {/* If user is logged in, return sign in. Else, return sign out */}
              {isUserLoggedIn() ? (
                <>
                  {" "}
                  <a href="/login">Sign in</a>
                </>
              ) : (
                <>
                  {" "}
                  <a href="/">Sign out</a>
                </>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;