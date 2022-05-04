import React from 'react'
import css from './Admin.module.css'
import { useState } from 'react';
import {  authAC } from '../../redux/actionCreators';
import { useDispatch } from 'react-redux';

export default function Admin() {

    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordType, setPasswordType ] = useState(false);

    const dispatch = useDispatch()



    const submit = (e) => {
        e.preventDefault();
        dispatch( authAC({login,password}));
    }
    

    const handleChange = (e) => {
        setLogin(e.target.value)
    }

  return (
    <div className='container'>
        <form onSubmit={submit} className={css.formWrapper}>
            <input 
            className={css.inputs}
            required  
            type="text" 
            placeholder='Login' 
            value={login} 
            onChange={handleChange}
            />
            <input 
            className={css.inputs}
            required  
            type={passwordType ? 'text' : 'password'} 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <div className={css.imgWrapper} onClick={() => setPasswordType(!passwordType)}>
                <img className={css.img} src="https://cdn-icons-png.flaticon.com/512/1250/1250766.png" alt="#" />
            </div>
            <button className={css.inputs}>Enter</button>
        </form>
    </div>
  )
}
