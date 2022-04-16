import css from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { SET_NEW_PIZZA } from "../../redux/actionType";

export default function Card({
  name,
  isAdmin,
  imgUrl,
  description,
  id,
  ...props
}) {
  const dispatch = useDispatch();
  const onBasket = () => {
    dispatch({
      type: SET_NEW_PIZZA,
      data: {name,description,imgUrl, ...props}
    })
  };
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={
            imgUrl ||
            "https://mevishcafe.com.ng/wp-content/uploads/2021/08/Pizza.jpg"
          }
          alt="#"
        />
      </div>
      <div className={css.cardDesc}>
        <h3>{name}</h3>
        <p className={css.p}>{description}</p>
        <div className={css.btnAndPrice}>
        <h2>$ {props.price}</h2>
        {isAdmin ? (
          <Link to={"/create-pizza"}>
            <button className={css.button}>Изменить</button>
          </Link>
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
