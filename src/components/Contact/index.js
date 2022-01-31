import React, { useState,  } from 'react';
import { validateEmail } from '../../utils/helpers';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // useState added to when a letter is clicked
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('email is invalid');
              } else {
                setErrorMessage('');
              } 
          }  else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required`);
            } else {
              setErrorMessage('');
            }
          }

          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
          
      
      }
      
      //submit function
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return (
        <section className="contact-cont">
          <div className="contact-info">
            <div className="contact-title">
              <h1 id="about">Let's chat.<br></br> Reach out to me.</h1>
              <hr class="my-4"></hr>
              <p class="lead"></p>
            </div>
            <div className="social-media">
            <a target="_blank" href="https://github.com/"><i class="bi-github"></i></a>
            <a target="_blank" href="https://linkedin.com/in/hector-daniel-perez-631283179"><i class="bi-linkedin"></i></a>
            <a target="_blank" href="https://instagram.com/"><i class="bi-instagram"></i></a>
            <a target="_blank" href="https://twitter.com/"><i class="bi-twitter"></i></a>
              </div>
          </div>
          
          <div className="contact-form-cont">
          <h2>Send me a message 🚀</h2>
          <form className="form-cont" id="contact-form" onSubmit={handleSubmit}>
            <div className="name-area">
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div className="email-area">
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div className="message-area">
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} onBlur={handleChange} rows="4" />
              {errorMessage && (
                <div>
                 <p className="error-text">{errorMessage}</p>
                    </div>
                    )}
            </div>
            <button  class="btn btn-primary btn-lg" href="/work" type="submit">Send message</button>
          </form>
          </div>
        </section>
        );
    }
    
    export default ContactForm;