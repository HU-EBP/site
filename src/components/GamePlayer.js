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
        style={{
          marginWidth: "320px",
          height: "650px",
          width: "960px",
        }}
        name="SPARK"
        msallowfullscreen="true"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        allowtransparency="true"
        height="1080px"
        width="1920px"
      ></iframe>
    </div>
  );
}

export default GamePlayer;
