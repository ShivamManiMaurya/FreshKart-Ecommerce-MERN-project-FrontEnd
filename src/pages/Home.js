import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import ProductByCategory from "../components/ProductByCategory";
import { ImSpinner10 } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { BsFillBasket2Fill } from "react-icons/bs";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Link } from "react-scroll";
import loader from "../assets/images/loader/animation_500_lj41ivn8.gif";

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

    const next = useRef();

    const handleRightClick = () => {
        next.current.scrollLeft += 400;
    };

    const handleLeftClick = () => {
        next.current.scrollLeft -= 400;
    };

    if (status === "error") {
        return (
            <h1 className="flex items-center justify-center h-full font-bold text-5xl ">
                Error...!
            </h1>
        );
    }

    return (
        <div className=" w-full">
            {/*-------------------------- top screen Home page heading and top products div -------------------- */}
            <div className=" lg:flex  w-full items-start justify-left gap-4 h-[calc(100vh-4.375rem)] bg-white">
                {/*-------------------------------------- Home page Heading --------------------------------------- */}
                <div className=" h-full lg:w-1/2 bg-black text-red-700 flex items-center justify-center  ">
                    <div
                        className="w-auto border-[6px]
                         border-red-700 p-4 mx-10 xl:mx-20"
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
                            <Link
                                className="border-[6px] border-red-700 px-5 py-3 hover:bg-red-700
                                 hover:text-black font-bold active:opacity-90 cursor-pointer"
                                to={"all-products"}
                                offset={-140}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="active"
                            >
                                Order Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/*----------------------------------------- top products -------------------------------------- */}
                {status === "loading" ? (
                    <div className="hidden md:flex items-center justify-center lg:w-1/2 h-[700px]">
                        <h1 className=" flex items-center justify-center h-full font-bold text-5xl ">
                            {/* <ImSpinner10 className=" text-black" /> */}
                            <img src={loader} alt="loader" />
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
                    {/* <ImSpinner10 className=" text-black" /> */}
                    <img src={loader} alt="loader" />
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
                                <ImSpoonKnife className="text-red-700" />
                                <h1>Categories</h1>
                            </div>
                            <div
                                className="text-2xl p-4 m-4 flex items-center lg:justify-center overflow-y-hidden 
                                    overflow-x-scroll scrollbar-none scroll-smooth transition-all"
                                ref={next}
                            >
                                <div className="m-2">
                                    <button
                                        className=" hidden sm:flex absolute right-0 z-20 text-7xl md:text-9xl opacity-60 
                                           md:mt-0 mt-[50px]  hover:opacity-70 transition-all  active:opacity-50"
                                        onClick={handleRightClick}
                                    >
                                        <MdNavigateNext className=" text-red-700" />
                                    </button>
                                    <button
                                        className=" hidden sm:flex absolute left-0 z-20 text-7xl md:text-9xl opacity-60 md:mt-0 mt-[50px]  hover:opacity-70
                                            transition-all active:opacity-50"
                                        onClick={handleLeftClick}
                                    >
                                        <MdNavigateBefore className=" text-red-700" />
                                    </button>
                                    <div className=" mb-[24px] sm:mb-[24px] lg:mb-0">
                                        <button
                                            className={`${
                                                !active && "bg-red-700"
                                            } bg-black active:opacity-80 rounded-full`}
                                            onClick={handleAllProducts}
                                        >
                                            <div className="w-20 h-20 text-4xl hover:text-5xl flex items-center justify-center overflow-hidden">
                                                <ImSpoonKnife
                                                    className={`${
                                                        !active
                                                            ? "text-black "
                                                            : " text-red-700"
                                                    }`}
                                                />
                                            </div>
                                        </button>
                                        <p className=" text-base text-center underline underline-offset-2 decoration-red-700">
                                            All
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start ">
                                    {filters?.map((category, index) => {
                                        return (
                                            <div className=" m-2 " key={index}>
                                                <button
                                                    className={`${
                                                        active === category &&
                                                        " bg-red-700"
                                                    }  bg-black active:opacity-80 rounded-full`}
                                                    onClick={() =>
                                                        handleFilterCategory(
                                                            category
                                                        )
                                                    }
                                                >
                                                    <div
                                                        className={` w-20 h-20 text-4xl hover:text-5xl flex items-center justify-center overflow-hidden`}
                                                    >
                                                        <ImSpoonKnife
                                                            className={`${
                                                                active ===
                                                                category
                                                                    ? "text-black "
                                                                    : " text-red-700"
                                                            }`}
                                                        />
                                                    </div>
                                                </button>
                                                <p className=" text-base text-center underline underline-offset-2 decoration-red-700">
                                                    {category}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/*--------------------------------- All products --------------------------------- */}
            <h4 className=" flex items-center gap-2 text-2xl font-bold p-4 underline decoration-red-700 ">
                <BsFillBasket2Fill className=" text-red-700" />
                Products
            </h4>
            {status === "loading" ? (
                <h1 className="flex items-center justify-center h-full font-bold text-5xl ">
                    {/* <ImSpinner10 className=" text-black" /> */}
                    <img src={loader} alt="loader" />
                </h1>
            ) : (
                <div
                    className=" flex flex-wrap gap-4 items-center justify-center"
                    id="all-products"
                >
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
        </div>
    );
}

export default Home;
