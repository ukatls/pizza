import axios from "axios";
import { baseUrl, pizzaApi } from "../constants";

const http = axios.create({
    baseURL: baseUrl
})


export default {
    getPizzas: ()=> http.get(pizzaApi),
    createPizza: (data)=> http.post(pizzaApi, data)
}