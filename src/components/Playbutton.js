import React from "react";
import { useState, useEffect } from "react";
import ShowAlert from "./ShowAlert";

function Playbutton() {
  const [isMobile, setIsMobile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  // Function to check if the user is on a mobile device
  useEffect(() => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);

  // Function to check if the user is on a mobile device and alert them if they are
  const playOrAlert = () => {
    if (isMobile === true) {
      setShowAlert(true);
    } else {
      // Open the game in a new tab
      window.open("https://hu-ebp.github.io/game/index.html", "_blank");
    }
  };

  window.addEventListener("click", (e) => {
    if (e.target.id === "close-button") {
      setShowAlert(false);
    }
  });

  return (
    <>
      {showAlert ? (
        <ShowAlert
          title="Oh no!"
          desc="This game is not available for mobile"
        />
      ) : (
        ""
      )}

      <button className="playbutton" onClick={playOrAlert}>
        Play
      </button>
    </>
  );
}

export default Playbutton;
