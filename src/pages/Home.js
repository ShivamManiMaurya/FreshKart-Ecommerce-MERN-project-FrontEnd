import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getProductData } from "../api";
import { fetchProduct } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import ProductByCategory from "../components/ProductByCategory";
import { ImSpinner10 } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";

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

    const [active, setActive] = useState("");
    const handleFilterCategory = (category) => {
        setActive(category);
        const filter = products.filter((product) => {
            return product.category === category;
        });
        setFilteredProd(filter);
    };

    const handleAllProducts = () => {
        setFilteredProd(products);
        setActive("");
    };

    const [showFilters, setShowFilters] = useState(false);

    const handleFilters = () => {
        setShowFilters((show) => !show);
    };

    if (status === "error") {
        return (
            <h1 className="flex items-center justify-center h-full font-bold text-5xl ">
                Error...!
            </h1>
        );
    }

    return (
        <>
            {/*-------------------------- top screen Home page heading and top products div -------------------- */}
            <div className="lg:flex items-start justify-left gap-4 h-full bg-white">
                {/*-------------------------------------- Home page Heading --------------------------------------- */}
                <div className=" lg:w-1/2 bg-lime-900 text-yellow-500 flex items-center justify-center h-full ">
                    <div
                        className="w-auto border-[6px]
                         border-yellow-500 p-4 mx-20"
                    >
                        <div className="">
                            <h1 className="text-6xl md:text-7xl font-bold mb-4 ">
                                Fresh and Fast delivery at your Doorstep
                            </h1>
                        </div>
                        <div>
                            <p className="hidden xl:flex">
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
                            <p className="xl:hidden 2xl:flex">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vel soluta ut nobis, quod,
                                nesciunt at sint voluptate pariatur fuga,
                                recusandae Lorem ipsum dolor sit amet
                                consectetur adipisicing elit...
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
                {status === "loading" ? (
                    <div className="hidden md:flex items-center justify-center lg:w-1/2 h-[700px]">
                        <h1 className=" flex items-center justify-center h-full font-bold text-5xl animate-spin">
                            <ImSpinner10 className=" text-black" />
                        </h1>
                    </div>
                ) : (
                    <div className="hidden lg:w-1/2 md:flex item-start justify-center gap-4 h-fit flex-wrap p-10">
                        {topProducts?.map((product, index) => {
                            return (
                                <ProductCard
                                    key={product._id}
                                    id={product._id}
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                    category={product.category}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            {/*------------------------------------ Categories wise products ------------------------------ */}

            <div className=" md:mt-[700px] lg:mt-0">
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
            </div>

            {/*-------------------------------------- filters --------------------------------- */}
            {status === "loading" ? (
                <h1 className="flex items-center justify-center h-full font-bold text-5xl">
                    {status}...
                </h1>
            ) : (
                <>
                    <button
                        className="flex items-center justify-center gap-2 text-2xl font-bold p-4 underline decoration-red-700 "
                        onClick={handleFilters}
                    >
                        <FaFilter className="text-red-700" />
                        Filters
                        <MdDoubleArrow className=" text-red-700 text-4xl mt-1" />
                    </button>
                    {showFilters && (
                        <div className=" ">
                            <div className="flex items-center gap-2 font-bold text-2xl p-4 underline decoration-red-700">
                                <BiCategoryAlt className="tex-red-700" />
                                <h1>Categories</h1>
                            </div>
                            <div className="text-2xl p-4 flex overflow-y-hidden overflow-x-scroll scrollbar-none">
                                <button
                                    className={`${
                                        !active && "bg-green-700"
                                    } bg-green-400 active:bg-green-600`}
                                    onClick={handleAllProducts}
                                >
                                    All Products
                                </button>
                                {filters?.map((category, index) => {
                                    return (
                                        <div className=" m-2 " key={index}>
                                            <button
                                                className={`${
                                                    active === category &&
                                                    "bg-green-700"
                                                }  bg-green-400 active:bg-green-600`}
                                                onClick={() =>
                                                    handleFilterCategory(
                                                        category
                                                    )
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
                </>
            )}

            {/*--------------------------------- All products --------------------------------- */}
            <h4 className="text-2xl font-bold p-4 ">Products</h4>
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
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default Home;
