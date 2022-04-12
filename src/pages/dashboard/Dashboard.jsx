import css from "./Dashboard.module.css";
import Card from "../../components/cards/Card";
import { Link } from "react-router-dom";

export default function Dashboard({pizzas}) {
  return (
    <div>
      <div className={`container`}>
        <h1>Пицца</h1>
        <div className={"card"}>
          <Link to={"/create-pizza"} className={css.addPizza}>
            <img
              className={css.img}
              src="https://cdn-icons.flaticon.com/png/512/3792/premium/3792702.png?token=exp=1649499182~hmac=d54bbb5c456835304d5ea62ebd828def"
              alt="#"
            />
          </Link>
          {pizzas?.map((item) => (
            <Card key={item.id} {...item} isAdmin />
          ))}
        </div>
      </div>
    </div>
  );
}
