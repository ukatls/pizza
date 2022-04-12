import React from "react";
import css from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import star from "../assets/images/star.svg";

export default function Header() {
  return (
    <div className="container">
      <div className={css.header}>
        <div className={css.left}>
          <Link to="/">
            <img className={css.logo} src={logo} alt="logo" />
          </Link>
          <div className={css.space}>
            <div>
              <p>Доставка пиццы  </p>
              <span>Бишкек</span>
            </div>
            <div>
              <span>35 мин  </span>
              <span>5  </span>
              <img className={css.star} src={star} alt="Оценка" />
            </div>
          </div>
          <div className={css.space}>
            <>0(551)550-550</>
            <div>Звонок по телефону</div>
          </div>
        </div>
        <Link to="/admin" className={css.right}>
          <button className={css.button}>Войти</button>
        </Link>
      </div>
    </div>
  );
}
