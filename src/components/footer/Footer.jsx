import React from 'react'
import css from './Footer.module.css'
import inst from "../assets/images/inst.svg"

export default function Footer() {
  return (
    <div className={css.footer}>
      <div>
        <img className={css.img} src={inst} alt="#" />
        <img className={css.img} src={inst} alt="#" />
        <img className={css.img} src={inst} alt="#" />
        <img className={css.img} src={inst} alt="#" />
      </div>
      <p>©Bektemirova Uulkelsin  Bishkek 2022</p>
    </div>
  )
}
