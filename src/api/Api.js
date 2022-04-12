import axios from "axios";
import { baseUrl } from "../constants";

export const Api = axios.create({
    baseURL: baseUrl
})