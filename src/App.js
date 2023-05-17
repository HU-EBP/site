import React from "react";
// import GamePlayer from "./components/GamePlayer";
import Navbar from "./components/Navbar";
import "./components/CallToAction.css";
import Playbutton from "./components/Playbutton";
// import ShowAlert from "./components/ShowAlert";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Call to action */}
      <div id="cta-container">
        <div className="cta-flex">
          <h1>Spark</h1>
          <Playbutton />
        </div>
      </div>
      {/* Gameplayer */}
      {/* <GamePlayer /> */}
      <div></div>
    </div>
  );
}

export default App;
