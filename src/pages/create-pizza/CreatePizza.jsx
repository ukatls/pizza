import css from "./CreatePizza.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl, pizzaApi } from './../../constants/index';

export default function CreatePizza() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const imageDouwland = "https://cdn-icons.flaticon.com/png/512/3694/premium/3694442.png?token=exp=1649505649~hmac=d05b6b2d62fc1637697019434091bbf8"

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("description", desc)
    formData.append("img", image)
    fetch(baseUrl+ pizzaApi, {
      method: "POST",
      body: formData
    })
      .finally(() => {
        navigate('/dashboard')
      })
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const priceChange = (e) => {
    setPrice(e.target.value);
  };

  const descChange = (e) => {
    setDesc(e.target.value);
  };

  const imageChange = (e) => {
    console.log(e.target.files);
    const image = e.target.files[0]
    setImage(image);

    const reader = new FileReader();
    reader.readAsDataURL(image)
    reader.onload = (e) => {
      setImageUrl(e.target.result)
    };
  };

  return (
    <div className="container">
      <form onSubmit={submit} className={css.createPizza}>
        <h1>Create New Item</h1>
        <h3>Image</h3>
        <label className={css.imgWrapper}>
          <input 
          type="file" 
          className={css.inputFile} 
          onChange={imageChange}
          />
          <img
            className={css.img}
            src={ imageUrl || imageDouwland }
            alt="#"
          />
        </label>
        <label htmlFor="text">
          <h3>Name</h3>
          <input
            className={css.input}
            type="text"
            value={name}
            onChange={nameChange}
            placeholder="Pizza"
          />
        </label>
        <label htmlFor="text">
          <h3>Price</h3>
          <input
            className={css.input}
            type="text"
            value={price}
            onChange={priceChange}
            placeholder="$ 6"
          />
        </label>
        <label htmlFor="text">
          <h3>Description</h3>
          <textarea
            className={css.input}
            value={desc}
            onChange={descChange}
            cols="30"
            rows="10"
          ></textarea>
        </label>
        
      </form>
    </div>
  );
}
<button className={css.button}>Создать Пиццу</button>