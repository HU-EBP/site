import React from "react";
import "./about.css";
import character from "../img/character.png";

function About() {
  return (
    <>
      <div id="aboutpage-wrapper">
        {/* Character and text */}
        <div className="about-container">
          <div id="character">
            <img src={character} alt="pixelart-character"></img>
          </div>
          <div id="character-text">
            <h1>Spark</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>
        </div>
        {/* What you will learn  */}
        {/* <div className="learn-container">
          <h3>What you will learn</h3>

          <div className="learnitems-container">
            <div className="learn-item">
              <h4>Thinking</h4>
              <p>and making your brain work</p>
            </div>

            <div className="learn-item">
              <h4>Thinking</h4>
              <p>and making your brain work</p>
            </div>

            <div className="learn-item">
              <h4>Thinking</h4>
              <p>and making your brain work</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default About;
