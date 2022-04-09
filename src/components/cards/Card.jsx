import css from "./Card.module.css";
import { Link } from 'react-router-dom';

export default function Card({
  addToBasket,
  name,
  isAdmin,
  imgUrl,
  description,
  id,
  ...props
}) {
  const onBasket = () => {
    addToBasket({ name, imgUrl, description, id, ...props });
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
      <h3>{name}</h3>
      <p className={css.p}>{description}</p>
      <h2>$ {props.price}</h2>
      {isAdmin ? (
        <Link to={"/create-pizza"}>
          <button className={css.button}>
            Изменить
          </button>
        </Link>
      ) : (
        <button onClick={onBasket} className={css.button}>
          Выбрать
        </button>
      )}
    </div>
  );
}
