import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Replies from "./pages/Replies";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
            
      <Routes>
                
        <Route path="/" element={<Layout />}>
               
          <Route index element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/:id/replies" element={<Replies />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
        </Route>
              
      </Routes>
          
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
