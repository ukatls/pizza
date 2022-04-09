import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardBasket from "../cards/CardBasket";
import css from "./Navbar.module.css";

export default function Navbar({ basket }) {
  const [modal, setModal] = useState(false);
  const onModal = () => setModal(!modal);
  const getAllPrice = () => {
    let price = 0;
    basket.forEach((item) => {
      price += parseFloat(item.price);
    });
    return price;
  };

  return (
    <>
      <nav className={`container ${css.navbar}`}>
        <div className={css.left}>
          <Link to={"/"}>Пицца</Link>
          <Link to={"/aboute-us"}>О нас</Link>
        </div>
        <button onClick={onModal}>корзина | {basket.length}</button>
      </nav>
      <div
        onClick={onModal}
        className={`${css.modal} ${modal ? css.activeModal : ""}`}
      >
        <div className={css.basketWrapper}>
          <img
            onClick={() => setModal(!modal)}
            className={css.closeModal}
            src="https://cdn-icons-png.flaticon.com/128/143/143604.png"
            alt="close"
          />
          <h2 className={css.h2}>
            {" "}
            {basket.length} товара на {getAllPrice()} сом
          </h2>
          <div>
            {basket.map((item) => (
              <div>
                
                {item.name}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
