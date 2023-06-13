import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "../components/contact.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_34ej9ku', 'template_ck3w84r', form.current, 'i2njx-0K_ARFwMto2')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // Reset het formulier na verzenden
    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-page">
      <h1>
        Contact <span>Here</span>
      </h1>
      <label>Naam</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Bericht</label>
      <textarea className="message" name="message" />
      <button type="submit">Verzenden</button>
    </form>
  );
};

export default ContactUs;
