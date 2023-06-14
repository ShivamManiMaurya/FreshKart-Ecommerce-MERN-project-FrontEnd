import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getProductData } from "../api";
import { fetchProduct } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import ProductByCategory from "../components/ProductByCategory";

function Home() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const topProducts = products.slice(1, 5);

    // console.log(typeof status);

    const [fitlteredProd, setFilteredProd] = useState(products);

    useEffect(() => {
        setFilteredProd(() => products);
    }, [products]);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    const filters = [
        ...new Set(products.map((product, index) => product.category)),
    ];

    // All categories list to pass data as a prop to ProductByCategory component........
    // const categories = filters.reduce(
    //     (filters, category) => ({ ...filters, [category]: category }),
    //     {}
    // );
    // console.log("All Categories = ", categories.Vegitables);
    // console.log(typeof categories?.Vegitables?.toString());
    //.......................................

    const handleFilterCategory = (category) => {
        const filter = products.filter((product) => {
            return product.category === category;
        });
        setFilteredProd(filter);
    };

    const handleAllProducts = () => {
        setFilteredProd(products);
    };

    if (status === "error") {
        return (
            <h1 className="flex items-center justify-center h-full font-bold text-5xl">
                Error...!
            </h1>
        );
    }

    return (
        <>
            {/*-------------------------- top screen Home page heading and top products div -------------------- */}
            <div className="flex items-start justify-left gap-4 h-full bg-white">
                {/*-------------------------------------- Home page Heading --------------------------------------- */}
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vel soluta ut nobis, quod,
                                nesciunt at sint voluptate pariatur fuga,
                                recusandae Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aut dignissimos
                                velit dolore beatae dolorum, optio adipisci quo
                                provident ut aliquam maxime nostrum, modi,
                                officia excepturi? Fuga quibusdam provident
                                labore voluptas.
                            </p>
                        </div>
                        <div className="flex items-center justify-center pt-4 ">
                            <button
                                className="border-[6px] border-yellow-500 px-5 py-3 hover:bg-yellow-500
                                 hover:text-lime-900 font-bold active:opacity-90"
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>

                {/*----------------------------------------- top products -------------------------------------- */}
                <div className="w-1/2 flex item-start justify-center gap-4 h-full flex-wrap p-10">
                    {topProducts?.map((product, index) => {
                        return status === "loading" ? (
                            <div>
                                <h1 className="">{status}...</h1>
                            </div>
                        ) : (
                            <ProductCard
                                key={product._id}
                                id={product._id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                category={product.category}
                                // status={status}
                            />
                        );
                    })}
                </div>
            </div>

            {/*------------------------------------ Categories wise products ------------------------------ */}

            <ProductByCategory
                category={"vegitables"}
                status={status}
                products={products}
            />

            <ProductByCategory
                category={"fruits"}
                status={status}
                products={products}
            />

            {/*-------------------------------------- filters --------------------------------- */}
            {status === "loading" ? (
                <h1 className="flex items-center justify-center h-full font-bold text-5xl">
                    {status}...
                </h1>
            ) : (
                <div>
                    <div className=" font-bold text-2xl p-4">
                        <h1>Categories</h1>
                    </div>
                    <div className="text-2xl p-4 flex">
                        <button
                            className="bg-green-400 active:bg-green-600"
                            onClick={handleAllProducts}
                        >
                            All Products
                        </button>
                        {filters?.map((category, index) => {
                            return (
                                <div className=" m-2 " key={index}>
                                    <button
                                        className=" bg-green-400 active:bg-green-600"
                                        onClick={() =>
                                            handleFilterCategory(category)
                                        }
                                    >
                                        <h4>{category}</h4>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/*--------------------------------- All products --------------------------------- */}
            {status === "loading" ? (
                <h1 className="flex items-center justify-center h-full font-bold text-5xl">
                    {status}...
                </h1>
            ) : (
                <div className=" flex flex-wrap gap-4 items-center justify-center">
                    {fitlteredProd.map((product, index) => {
                        return (
                            <ProductCard
                                key={product._id}
                                id={product._id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                category={product.category}
                                // status={status}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default Home;
