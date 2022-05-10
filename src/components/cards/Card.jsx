/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import css from "./Card.module.css";
import { useDispatch } from "react-redux";
import { ACsetNewPizza } from "../../redux/actionCreators";
import Api from "../../api/Api";

export default function PizzaCard({ title, name, info, file, id, isAdmin, ...props }) { 
  const imgUrl = "http://solid.lol/public/" + file
  const dispatch = useDispatch();
  const onBasket = () => {
    dispatch( ACsetNewPizza({title, name, info, file, id, ...props }) );
  };
  const onDelete = () => {
    Api.deletePizza(id).then(() => {
      window.location.reload();
    });
  };
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={ imgUrl || 
            "https://dodopizza-a.akamaihd.net/static/Img/Products/3401546fe43c42e9a05325a74c937ce4_366x366.jpeg"
          }           alt="#"
        />
      </div>
      <div className={css.cardDesc}>
        <h3>{name}</h3>
        <p className={css.p}>{info}</p>
        <div className={css.btnAndPrice}>
          <h2>$ {props.price}</h2>
          {isAdmin ? (
            <button onClick={onDelete} className={css.button}>
              Удалить
            </button>
          ) : (
            <button onClick={onBasket} className={css.button}>
              Выбрать
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
