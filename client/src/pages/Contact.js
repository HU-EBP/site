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
        form.current.reset();
        showAlert('Mail verzonden!', true);
      }, (error) => {
        console.log(error.text);
      });
  };
  
  const showAlert = (message, success) => {
    const alertDiv = document.createElement('div');
    alertDiv.textContent = message;
    alertDiv.className = success ? 'alert success' : 'alert error';
  
    const contactPage = document.querySelector('.contact-page');
    contactPage.appendChild(alertDiv);
  
    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  };

  
  return (
    <form ref={form} onSubmit={sendEmail} className="contact-page">
      <div className='titel'><h1>
        Contact <span>Here</span>
      </h1></div>
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

