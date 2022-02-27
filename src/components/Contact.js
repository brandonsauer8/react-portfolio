import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 className="content is-large has-text-white has-text-weight-bold">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className="label content is-medium has-text-warning" htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <br>
        </br>
        <div>
          <label className="label content is-medium has-text-warning" htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <br>
        </br>
        <div>
          <label className="label content is-medium has-text-warning" htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
      <br>
      </br>
      <div>
          <p className="content is-large has-text-warning"> Contact Info: </p>
          <p className="content is-medium has-text-warning"> Name: Brandon Sauer</p>
          <p className="content is-medium has-text-warning"> Email: brantheman8@comcast.net</p>
          <p className="content is-medium has-text-warning"> Phone: (707) 688-4646</p>
          
        </div>
    </section>
  );
}

export default Contact;