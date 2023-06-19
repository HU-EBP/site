// import React, { useState, useEffect } from "react";

// function GamePlayer() {
//   const [isMobile, setIsMobile] = useState(null);

//   useEffect(() => {
//     setIsMobile(
//       /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//         navigator.userAgent
//       )
//     );
//   }, []);

//   return (
//     <>
//       <div id="game-container">
//         {isMobile ? (
//           <>
//             <h1 className="thegametitle">THE GAME</h1>
//             <div className="flex-center">
//               <div className="gameframe-mobile flex-center">
//                 <h2>Spark is currently not available on mobile devices.</h2>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <h1 className="thegametitle">THE GAME</h1>
//             <div className="game-container">
//               <iframe
//                 id="game"
//                 title="Game"
//                 mozallowfullscreen="true"
//                 allow="autoplay; fullscreen"
//                 src="https://hu-ebp.github.io/game/index.html"
//                 name="SPARK"
//                 msallowfullscreen="true"
//                 allowFullScreen="true"
//                 webkitallowfullscreen="true"
//                 allowtransparency="true"
//               ></iframe>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default GamePlayer;
