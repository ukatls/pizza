import React from 'react'
import { useNavigate } from 'react-router-dom';
import css from './Order.module.css'

export default function Order() {

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        alert('Спасибо. Заявка принята. Сейчас с вами свяжется наш менеджер.')
        navigate('/')
        localStorage.removeItem('basket')
        window.location.reload();
    }

  return (
    <div className='container'>
        <form onSubmit={submit}>
            <div className={css.div}>
                <input className={css.name} type="text" name="text" placeholder='Ваше имя'/>
                <input className={css.name} type="tel" name="tel" placeholder='+996(700)00-00-00' />
                <input className={css.name} type="email" name="email" placeholder='exemple@gmail.com' />
                <button className={css.button}>Заказать</button>
            </div>
        </form>
    </div>
  )
}
