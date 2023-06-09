import React, { useState } from "react";
import "../components/contact.css";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Voorkomt dat het formulier de pagina herlaadt

    // Plaats hier de code om de e-mail te verzenden

    setShowAlert(true); // Toont de alert na het verzenden van de e-mail
  };

  return (
    <div>
      {showAlert && (
        <div className="alert alert-success">
          Mail verzonden!
        </div>
      )}
      <form className="contact-page" onSubmit={handleSubmit}>
        <h1>
          Contact <span>Here</span>
        </h1>
        <input type="email" name="email" placeholder="Enter name" />
        <input type="text" name="name" placeholder="Example@gmail.com" />
        <input type="text" name="subject" placeholder="Enter Subject" />
        <textarea className="message" id="30" rows="10" placeholder="type here..." />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Contact;

