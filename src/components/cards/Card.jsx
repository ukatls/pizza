import { Link } from "react-router-dom";
import css from "./Card.module.css";

export default function Card({ title, imgUrl, description, id, ...props}) {
  
  return (
    
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={imgUrl || 'https://mevishcafe.com.ng/wp-content/uploads/2021/08/Pizza.jpg'} alt="#" />
      </div>
      <h2>$ {props.price}</h2>
      <h3>{title}</h3>
      <p className={css.p}>{description}</p>
      <Link to={'/house/'+ id}>
        <button >Подробнее</button>
      </Link>
    </div>
    
  );
}