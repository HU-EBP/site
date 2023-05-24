import React from "react";
import Home from "./pages/Home"; // Import Home component
import Forum from "./pages/Forum";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Replies from "./pages/Replies";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="./pages/Home.js" exact component={Home} />
      <Route path="./pages/Forum.js" component={Forum} />
      <Route path="./pages/LoginPage.js" component={Login} />
      <Route path="./pages/Register.js" component={Register} />
      <Route path="./pages/Replies.js" component={Replies} />
      <Route path="./pages/Dashboard.js" component={Dashboard} />
    </Router>
  );
}

export default App;
