import React from "react";
import Playbutton from "../components/Playbutton";
import "../index.css";
import "../components/CallToAction.css";
import About from "../components/about";
import ChatBot from "../components/ChatBot";

function Home() {
  return (
    <div>
      {/* Call to action */}
      <div id="cta-container">
        <div className="cta-flex">
          <h1>Spark</h1>
          <Playbutton />
        </div>
      </div>
      {/* Gameplayer */}
      {/* <GamePlayer /> */}
      <About />
      <ChatBot />
      <div></div>
    </div>
  );
}

export default Home;
