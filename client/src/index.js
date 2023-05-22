import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Replies from "./pages/Replies";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
            
      <Routes>
                
        <Route path="/" element={<Layout />}>
               
          <Route index element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forum/:slug" element={<Replies />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
              
      </Routes>
          
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
