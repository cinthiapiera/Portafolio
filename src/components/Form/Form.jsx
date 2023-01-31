import React, { useRef } from 'react';
import './Form.css';

import emailjs from '@emailjs/browser';

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0bpzxta', 'template_5f0diuq', form.current, '4mF-jOz_cWZsFyrvx')
      .then((result) => {
          alert('se ha enviado coreectamente el email')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
        <div className="form__input">
            <input type="text" name="user_name" placeholder='Tu nombre'/>
        </div>
        <div className="form__input">
            <input type="email" name="user_email" placeholder='Tu E-mail'/>
        </div>
        <div className="form__input">
            <textarea name="message" placeholder='Escribir mensaje'/>
        </div>
        <button className='submit__btn' type='submit' value="Send">
            Enviar
        </button>
    </form>
  )
}

export default Form;