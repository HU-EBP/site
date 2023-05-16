import React from "react";
import GamePlayer from "./components/GamePlayer";
import Navbar from "./components/Navbar";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div>
      <Navbar />
      <CallToAction />
      <GamePlayer />
    </div>
  );
}

export default App;
