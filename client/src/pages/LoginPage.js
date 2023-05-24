import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFrame from "./LoginFrame";

const LoginPage = () => {
  //👇🏻 React Router's useNavigate hook
  const navigate = useNavigate();

  const isUserLoggedIn = () => {
    if (localStorage.getItem("_id")) {
      return true;
    }
    return false;
  };
  if (isUserLoggedIn() === false) {
    return (
      <>
        {/* Login section */}
        <LoginFrame></LoginFrame>
      </>
    );
  } else {
    return (
      <>
        {/* Forum section */}
        <div className="forum">
          <h1>You are already logged in!</h1>
          <button onClick={() => navigate("/forum")}>Go to Forum</button>
        </div>
      </>
    );
  }
};
export default LoginPage;
