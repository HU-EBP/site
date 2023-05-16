import React from "react";
import background from "../img/background.png";
import "../components/CallToAction.css";

function CallToAction() {
  return (
    <div id="cta-container">
      <div className="cta-flex">
        <h1>Spark</h1>
        <button className="playbutton">Play</button>
      </div>
    </div>
  );
}

export default CallToAction;
