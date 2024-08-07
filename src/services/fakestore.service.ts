import axios from "axios";
import { GET_PRODUCTS } from "../constants";

export const getProducts = (keywords?: string) => {
    return axios.get(`${GET_PRODUCTS}${keywords ? '?title=' + keywords : ''}`);
}