import "../components/contact.css";
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ck3w84r', form.current, 'hKyvDQkLDIozlHXyo')
      .then((result) => {
          console.log(result.text);
          setShowAlert(true); // Stel showAlert in op true na succesvol verzenden van de e-mail
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
      <form ref={form} onSubmit={sendEmail} className="contact-page">
        <h1>
          Contact <span>Here</span>
        </h1>
        <input type="email" name="user_email" placeholder="Example@gmail.com" />
        <input type="text" name="user_name" placeholder="Enter Name" />
        <input type="text" name="subject" placeholder="Enter Subject" />
        <textarea className="message" id="30" rows="10" placeholder="type here..." />
        <button value="send" type="submit">send</button>
      </form>
    </div>
  );
};

export default Contact;
