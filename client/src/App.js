import React from "react";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Replies from "./pages/Replies";

import ChatBot from "./components/ChatBot";
function App() {
  // Render the components within a Router to handle routing
  return (
    <Router>
      {/* Navbar component, shown on all pages */}
      <Navbar />
      {/* Route components define paths for each page */}
      {/* 'exact' means that the route will only be chosen if the path is an exact match */}
      <Route path="/" exact component={Home} />
      <Route path="/forum" component={Forum} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={Register} />
      <Route path="/replies" component={Replies} />
      <Route path="/chat" element={ChatBot} />
    </Router>
  );
}

// Export App component so it can be imported and used in other files
export default App;
