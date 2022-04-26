import axios from "axios";
import { baseUrl, pizzaApi } from "../constants";

const http = axios.create({
    baseURL: baseUrl
})

const api = axios.create({
    baseURL: "https://tranquil-retreat-96647.herokuapp.com/"
})


export default {
    getPizzas: ()=> http.get(pizzaApi),
    createPizza: (data)=> http.post(pizzaApi, data),
    auth: (data) => api.post("admin", data)
}