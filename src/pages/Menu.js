import React, { useState, useEffect } from "react";
import axios from "axios";

function Menu() {
    const [data, setData] = useState("");

    // const getData = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:8080/menu");
    //         setData(response);
    //     } catch (error) {
    //         console.log("error haah: ", error);
    //     }
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div>
            Menu
            {/* <h1>{data}</h1> */}
        </div>
    );
}

export default Menu;
