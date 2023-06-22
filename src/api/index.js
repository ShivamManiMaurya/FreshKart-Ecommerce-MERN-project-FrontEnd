import axios from "axios";

// const url = process.env.REACT_APP_SERVER_DOMAIN;
const url = "https://freshkart-ecommerce-mern-project-backend.onrender.com";

export const postSignupData = (data) => axios.post(`${url}/signup`, data);
export const postLoginData = (data) => axios.post(`${url}/login`, data);
export const postProductData = (data) => axios.post(`${url}/addproduct`, data);
export const getProductData = () => axios.get(`${url}/showproducts`);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);
