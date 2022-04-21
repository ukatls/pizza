import css from "./Dashboard.module.css";
import Card from "../../components/cards/Card";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const pizzas = useSelector((state)=>state.pizza.data)
  return (
    <div>
      <div className={`container`}>
        <h1>Пицца</h1>
        <div className={"card"}>
          <Link to={"/create-pizza"} className={css.addPizza}>
            <img
              className={css.img}
              src="https://img.icons8.com/external-kmg-design-flat-kmg-design/344/external-image-user-interface-kmg-design-flat-kmg-design.png"
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
