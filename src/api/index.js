import axios from "axios";

const url = "http://localhost:8080";

// export const fetchUser = async () => {
//     const res = await axios.get(url);
//     return res;
// };

export const postSignupData = (data) => axios.post(`${url}/signup`, data);
export const postLoginData = (data) => axios.post(`${url}/login`, data);
export const postProductData = (data) => axios.post(`${url}/addproduct`, data);
export const getProductData = () => axios.get(`${url}/showproducts`);
