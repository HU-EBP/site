import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "../components/Navbar.css";
import "../index.css";

function Navbar() {
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

  // const isUserLoggedIn = () => {
  //   if (localStorage.getItem("_id")) {
  //     return null;
  //   }
  //   return <Link to="/login">Sign in</Link>;
  // };

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
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {isUserLoggedIn() ? (
              <>
                {" "}
                <button onClick={signOut}>Sign out</button>
              </>
            ) : (
              <>
                {" "}
                <a href="/login">
                  <button>Sign in</button>
                </a>
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
