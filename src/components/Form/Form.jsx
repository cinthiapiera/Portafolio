import React from 'react';
import './Form.css';
import { useState } from 'react';

const Form = () => {
  const [enteredName,setEnteredName] = useState('');
  const [enteredEmail,setEnteredEmail] = useState('');
  const [enteredMessage,setEnteredMessage] = useState('');

  // const submithandler = (e) => {
  //   e.preventDefault()
  //   console.log('submitted');
  // }
    
  return (
    <form className='form'>
        <div className="form__input">
            <input type="text" placeholder='Tu nombre' value={enteredName} onChange={e=>setEnteredName(e.target.value)}/>
        </div>
        <div className="form__input">
            <input type="email" placeholder='Tu E-mail' value={enteredEmail} onChange={e=>setEnteredEmail(e.target.value)}/>
        </div>
        <div className="form__input">
            <textarea placeholder='Escribir mensaje' value={enteredMessage}  onChange={e=>setEnteredMessage(e.target.value)}></textarea>            
        </div>
        <button className='submit__btn' type='submit'>
            Enviar
        </button>
    </form>
  )
}

export default Form;