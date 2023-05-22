import React from "react";
import Home from "./pages/Home"; // Import Home component
import Forum from "./pages/Forum";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="./pages/Home.js" exact component={Home} />
      <Route path="./pages/Forum.js" component={Forum} />
    </Router>
  );
}

export default App;
