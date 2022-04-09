import React from 'react'
import css from './Admin.module.css'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

export default function Admin() {

    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordType, setPasswordType ] = useState(false);


    const rout = useNavigate();


    const submit = (e) => {
        e.preventDefault();
        // TODO: add login logit
        rout('/dashboard')
    }
    

    const handleChange = (e) => {
        setLogin(e.target.value)
    }

  return (
    <div className='container'>
        <form onSubmit={submit} className={css.formWrapper}>
            <input 
            required  
            type="text" 
            placeholder='Login' 
            value={login} 
            onChange={handleChange}
            />
            <input 
            required  
            type={passwordType ? 'text' : 'password'} 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <div onClick={() => setPasswordType(!passwordType)}>show</div>
            <button>Enter</button>
        </form>
    </div>
  )
}
