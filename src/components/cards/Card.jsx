import { Link } from "react-router-dom";
import css from "./Card.module.css";

export default function Card({ name, imgUrl, description, id, ...props}) {
  
  return (
    
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={imgUrl || 'https://mevishcafe.com.ng/wp-content/uploads/2021/08/Pizza.jpg'} alt="#" />
      </div>
      <h3>{name}</h3>
      <p className={css.p}>{description}</p>
      <h2>$ {props.price}</h2>
      <Link to={'/pizza/'+ id}>
        <button className={css.button}>Подробнее</button>
      </Link>
    </div>
    
  );
}