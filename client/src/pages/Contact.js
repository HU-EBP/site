import React, { useState, useRef } from "react";
import "../components/contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();  

    setShowAlert(true); 
    
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
        <input type="email" name="user_email" placeholder="Enter name" />
        <input type="text" name="user_name" placeholder="Example@gmail.com" />
        <input type="text" name="subject" placeholder="Enter Subject" />
        <textarea className="message" id="30" rows="10" placeholder="type here..." />
        <button value="send" type="submit">send</button>
      </form>
    </div>
  );
};

export default Contact;

