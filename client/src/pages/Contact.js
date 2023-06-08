import React, { Component } from "react";
import "../components/contact.css";


const contact = () => {
  return (
    <form className="contact-page">
      <h1>
        Contact <span>Here</span>
      </h1>
      <input type="email" name="email" id="" placeholder="Enter name"/>
      <input type="text" name="name" id=""placeholder="Example@gmail.com"/>
      <input type="text" name="subject" id="" placeholder="Enter Subject"/>
      <textarea className="message" id="30" rows="10" placeholder="type here..."/>
      <button type="submit">send</button>
    </form>
  );
};


export default contact;