import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getProductData } from "../api";
import { fetchProduct } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

function Home() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const topProducts = products.slice(1, 5);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    // console.log("useState = ", products);

    // console.log(status);

    if (status === "loading") {
        return <h1>{status}...</h1>;
    }

    if (status === "error") {
        return <h1>{status}...!</h1>;
    }

    return (
        <div className="flex items-start justify-left gap-4 h-full bg-white">
            <div className=" w-1/2 bg-lime-900 text-yellow-500 flex items-center justify-center h-full ">
                <div
                    className="w-[550px] border-[6px]
            border-yellow-500 p-4"
                >
                    <div className="">
                        <h1 className=" text-7xl font-bold mb-4 ">
                            Fresh and Fast delivery at your Doorstep
                        </h1>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vel soluta ut nobis, quod, nesciunt at sint
                            voluptate pariatur fuga, recusandae Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Aut
                            dignissimos velit dolore beatae dolorum, optio
                            adipisci quo provident ut aliquam maxime nostrum,
                            modi, officia excepturi? Fuga quibusdam provident
                            labore voluptas.
                        </p>
                    </div>
                    <div className="flex items-center justify-center pt-4 ">
                        <button className="border-[6px] border-yellow-500 px-5 py-3 hover:bg-yellow-500 hover:text-lime-900 font-bold active:opacity-90">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex item-start justify-between gap-4 h-full flex-wrap p-10">
                {topProducts?.map((product, index) => {
                    return (
                        <ProductCard
                            key={product._id}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            discription={product.discription}
                            category={product.category}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
