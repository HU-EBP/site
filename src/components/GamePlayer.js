import React, { useState, useEffect } from "react";

function GamePlayer() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);

  if (isMobile === null) {
    return (
      <>
        <div className="loader flex-center">
          <h2>Loading game frame...</h2>
        </div>
      </>
    );
  } else
    return (
      <>
        <h1 className="thegametitle">THE GAME</h1>
        <div id="game-container">
          {isMobile ? (
            <>
              <div className="gameframe-mobile flex-center">
                <h2>Spark is currently not available on mobile devices.</h2>
              </div>
            </>
          ) : (
            <>
              <div
                className="game-container"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
              >
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
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </>
          )}
        </div>
      </>
    );
}

export default GamePlayer;
