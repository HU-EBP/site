import React from "react";

function GamePlayer() {
  return (
    <div id="game-container">
      <iframe
        id="game"
        title="Game"
        mozallowfullscreen="true"
        allow="autoplay; fullscreen"
        src="https://hu-ebp.github.io/game/index.html"
        name="SPARK"
        msallowfullscreen="true"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        allowtransparency="true"
      ></iframe>
    </div>
  );
}

export default GamePlayer;
