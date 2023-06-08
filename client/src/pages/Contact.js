import React from "react";
import { useNavigate, Link } from "react-router-dom";

const contact = () => {
  return (
    <form>
      <h1>
        Contact <span>Here</span>
      </h1>
      <input type="email" name="email" id=""/>
      <input type="text" name="name" id=""/>
      <input type="text" name="name" id=""/>
      <textarea name="message" id="30" rows="10"/>
      <button type="submit">send</button>
    </form>
  );
};


export default contact;