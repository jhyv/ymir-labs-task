import axios from "axios";
import { GET_PRODUCTS } from "../constants";

export const getProducts = () => {
    return axios.get(GET_PRODUCTS);
}