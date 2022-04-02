import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

export default function Navbar({basket}) {
  const [modal, setModal] = useState(false);
  const onModal = () => setModal(!modal)
  const getAllPrice = () =>{
    let price = 0;
    basket.forEach((item) => {
      price += item.price
    });
    return price
  }
  
  return (
    <>
      <div className={`container ${css.navbar}`}>
        <Link to={"/"}>Пицца</Link>
        <Link to={"/aboute-us"}>О нас</Link>
        <button onClick={onModal}>корзина</button>
      </div>
      <div onClick={onModal} className={ `${css.modal} ${modal ? css.activeModal : ""}`}>
        <div className={css.basketWrapper}>
          <img onClick={() => setModal(!modal)} className={css.closeModal} src="https://cdn-icons-png.flaticon.com/128/143/143604.png" alt="close" />
          <h2> {basket.length} товара на {getAllPrice()} сом</h2>
        </div>
      </div>
    </>
  );
}
