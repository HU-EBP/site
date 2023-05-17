import React from "react";
import { useState, useEffect } from "react";
import ShowAlert from "./ShowAlert";

function Playbutton() {
  const [isMobile, setIsMobile] = useState(null);
  const [alert, setAlert] = useState(null);

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
    if (isMobile) {
      setAlert({
        title: "Spark",
        message: "is not available for mobile.",
      });
    } else {
      setAlert({
        title: "Spark",
        message: "Game is about to start.",
      });
      //   Set timeout to allow the user to read the alert
      setTimeout(() => {
        window.open("https://hu-ebp.github.io/game/index.html", "_blank");
      }, 1000);

      setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
  };

  window.addEventListener("click", (e) => {
    if (e.target.id === "close-button") {
      setAlert(false);
    }
  });

  return (
    <>
      {alert && <ShowAlert title={alert.title} message={alert.message} />}
      <button className="playbutton" onClick={playOrAlert}>
        Play
      </button>
    </>
  );
}

export default Playbutton;
