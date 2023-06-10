import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProductData } from "../api";

function Home() {
    // const user = useSelector((state) => state.user);
    // console.log("home = ", user);
    const [prodData, setProdData] = useState();

    useEffect(() => {
        const fetchdata = async (data) => {
            const fetchedData = await getProductData(data);
            console.log(fetchedData.data);
            setProdData(fetchedData.data);
            // return fetchedData.data.prodData;
        };
        fetchdata();
    }, []);

    console.log("useState = ", prodData);

    return (
        <div>
            {prodData?.map((data, index) => {
                return (
                    <div key={data._id}>
                        <h1>{data.name}</h1>
                        <img src={data.image} alt="" className=" w-10 h-10" />
                    </div>
                );
            })}
            Home
        </div>
    );
}

export default Home;
