import React from "react";
import "./alert.css";

function ShowAlert(props) {
  return (
    <div className="alert">
      <div className="alert-container">
        <div className="textcontainer">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
        <p id="close-button" className="flex-center">
          X
        </p>
      </div>
    </div>
  );
}

export default ShowAlert;
