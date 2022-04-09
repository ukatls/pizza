import css from "./Dashboard.module.css";
import Card from "../../components/cards/Card";
import { useState } from "react";
import { useEffect } from "react";
import { baseUrl, pizzaApi } from "./../../constants/index";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [pizzaArray, setPizzaArray] = useState([]);

  useEffect(() => {
    fetch(baseUrl + pizzaApi)
      .then((resp) => resp.json())
      .then((data) => setPizzaArray(data));
  }, []);
  return (
    <div>
      <div className={`container`}>
        <h1>Пицца</h1>
        <div className={"card"}>
          <Link to={"/create-pizza"} className={css.addPizza}>
            <img
              src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303779.png?token=exp=1649332547~hmac=02d97fc3c4b31c9a43688839908da94f"
              alt="#"
            />
          </Link>
          {pizzaArray.map((item) => (
            <Card key={item.id} {...item} isAdmin />
          ))}
        </div>
      </div>
    </div>
  );
}
