import axios from "axios";

const api = axios.create({
  baseURL: "http://solid.lol/",
});

api.interceptors.request.use((config)=>{
    config.headers.token = JSON.parse(localStorage.getItem("auth"))?.token
    return config
})

export default {
  getPizzas: () => api.get("getall/pizza"),
  createPizza: (data) =>
    api.post("add/pizza", data),
  auth: (data) => api.post("admin", data),
  deletePizza: (id) => api.delete("delete/pizza/" + id)
};
