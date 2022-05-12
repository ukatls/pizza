import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const basket = useSelector((state) => state.basket.data);
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
              <div key={item.id} className={css.cardNavWrapper}>
                <img src={"http://solid.lol/public/" + item.file} alt="#" />
                <div>
                  <h2 className={css.h2}>{item.name}</h2>
                  <h4>{item.description}</h4>
                  <h3>$ {item.price}</h3>
                </div>
              </div>
            ))}
            <div className={css.basketPriceFooter}>
              <div className={css.basketPrice}>
                <p> {basket.length} товара</p>
                <p>{getAllPrice()} сом</p>
              </div>
              <hr />
              <div className={css.basketPrice}>
                <p>Сумма заказа</p>
                <p>{getAllPrice()} сом</p>
              </div>
              <Link to={"/order"}>
                <button className={css.button}>Заказать</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
