import axios from "axios";

const url = "http://localhost:8080";

// export const fetchUser = async () => {
//     const res = await axios.get(url);
//     return res;
// };

export const fetchData = (data) => axios.post(`${url}/signup`, data);
