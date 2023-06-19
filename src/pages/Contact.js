import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../components/contact.css";


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ck3w84r', form.current, 'hKyvDQkLDIozlHXyo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-page">
    <h1>
          Contact <span>Here</span>
        </h1>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea className="message"  name="message" />
      <button value="send" type="submit">send</button>
    </form>
  );
};

 export default ContactUs;