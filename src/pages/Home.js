import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getProductData } from "../api";
import { fetchProduct } from "../redux/productSlice";

function Home() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const user = useSelector((state) => state.user);
    // console.log("home = ", user);
    // const [prodData, setProdData] = useState();

    useEffect(() => {
        dispatch(fetchProduct());
        // const fetchdata = async () => {
        //     const fetchedData = await getProductData();
        //     setProdData(fetchedData.data);
        // };
        // fetchdata();
    }, [dispatch]);

    console.log("useState = ", products);

    console.log(status);

    if (status === "loading") {
        return <h1>{status}...</h1>;
    }

    if (status === "error") {
        return <h1>{status}...!</h1>;
    }

    return (
        <div>
            {products?.map((product, index) => {
                return (
                    <div key={product._id}>
                        <h1>{product.name}</h1>
                        <img
                            src={product.image}
                            alt=""
                            className=" w-10 h-10"
                        />
                    </div>
                );
            })}
            Home
        </div>
    );
}

export default Home;
