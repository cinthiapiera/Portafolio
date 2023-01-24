import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form className='form'>
        <div className="form__input">
            <input type="text" placeholder='Tu nombre'/>
        </div>
        <div className="form__input">
            <input type="email" placeholder='Tu E-mail'/>
        </div>
        <div className="form__input">
            <textarea placeholder='Escribir mensaje'></textarea>
        </div>
        <button className='submit__btn' type='submit'>
            Enviar
        </button>
    </form>
  )
}

export default Form;