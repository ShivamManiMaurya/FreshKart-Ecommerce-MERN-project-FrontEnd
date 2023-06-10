import axios from "axios";

const url = "http://localhost:8080";

// export const fetchUser = async () => {
//     const res = await axios.get(url);
//     return res;
// };

export const fetchData = (data) => axios.post(`${url}/signup`, data);
export const fetchLoginData = (data) => axios.post(`${url}/login`, data);
export const fetchProductData = (data) => axios.post(`${url}/addproduct`, data);
export const getProductData = (data) => axios.get(`${url}/showproducts`, data);
