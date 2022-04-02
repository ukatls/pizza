import css from "./Main.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../components/cards/Card";
import { useState } from 'react';
import { useEffect } from 'react';
import { baseUrl, houseApi } from './../../constants/index';

export default function Main() {
  
  const [ pizzaArray, setPizzaArray] = useState([]);
 

  useEffect(() => {
    fetch(baseUrl + houseApi)
      .then((resp) => resp.json())
      .then((data) => (setPizzaArray(data)));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div >
      <div className={css.slider}>
        <Slider {...settings} className="container">
          <div className={css.slide}><h3>Как получить кешбек 5%</h3></div>
          <div className={css.slide}><h3>Как получить кешбек 5%</h3></div>
          <div className={css.slide}><h3>Как получить кешбек 5%</h3></div>
          <div className={css.slide}><h3>Как получить кешбек 5%</h3></div>
          <div className={css.slide}><h3>Как получить кешбек 5%</h3></div>
          <div className={css.slide}><h3>Как получить кешбек 5%</h3></div>
          <div className={css.slide}><h3>Как получить кешбек 5%</h3></div>
          <div className={css.slide}><h3>Как получить кешбек 5%</h3></div>
        </Slider>
      </div>
      <div className={`container`}>
        <h1>Пицца</h1>
        <div className={css.card}>
          {pizzaArray.map((item) => (
            <Card 
            {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
