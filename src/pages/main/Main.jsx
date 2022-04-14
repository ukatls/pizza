import css from "./Main.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../components/cards/Card";
import { useSelector } from "react-redux";

export default function Main() {
  const pizzas = useSelector((state)=>state.pizza.data)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div >
      <div className={`container ${css.slider}`}>
        <Slider {...settings}>
          <div><div className={css.slide}><h3>Как получить кешбек 5%</h3></div></div>
          <div><div className={css.slide}><h3>Как получить кешбек 5%</h3></div></div>
          <div><div className={css.slide}><h3>Как получить кешбек 5%</h3></div></div>
          <div><div className={css.slide}><h3>Как получить кешбек 5%</h3></div></div>
          <div><div className={css.slide}><h3>Как получить кешбек 5%</h3></div></div>
          <div><div className={css.slide}><h3>Как получить кешбек 5%</h3></div></div>
          <div><div className={css.slide}><h3>Как получить кешбек 5%</h3></div></div>
        </Slider>
      </div>
      <div className={`container`}>
        <h1>Пицца</h1>
        <div className={css.card}>
          {pizzas?.map((item) => ( <Card key={item.id} {...item} />))}
        </div>
      </div>
    </div>
  );
}
