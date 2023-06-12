import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getProductData } from "../api";
import { fetchProduct } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import { FcNext, FcPrevious } from "react-icons/fc";

function Home() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const topProducts = products.slice(1, 5);
    const vegitables = products.filter(
        (product) => product.category === "Vegitables"
    );
    // console.log("vegies = ", vegitables);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    // console.log("cts = ", products.category);
    const filters = [
        ...new Set(products.map((product, index) => product.category)),
    ];
    console.log("filters = ", filters);

    // console.log("useState = ", products);
    // console.log(status);

    // if (status === "loading") {
    //     return (
    //         <h1 className="flex items-center justify-center h-full font-bold text-5xl">
    //             {status}...
    //         </h1>
    //     );
    // }

    const next = useRef();

    const handleRightClick = () => {
        // console.log(next.current);
        next.current.scrollLeft += 400;
    };

    const handleLeftClick = () => {
        next.current.scrollLeft -= 400;
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
                    {status === "loading" ? (
                        <h1 className="flex items-center justify-center h-full font-bold text-5xl">
                            {status}...
                        </h1>
                    ) : (
                        topProducts?.map((product, index) => {
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
                        })
                    )}
                </div>
            </div>

            {/*------------------------------------ Vegitable products ------------------------------ */}
            <div>
                <h4 className=" text-2xl font-bold p-4 ">Vegitables</h4>
                <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-none gap-4 p-4 pt-0">
                    {status === "loading" ? (
                        <h1 className="flex items-center justify-center h-full font-bold text-5xl">
                            {status}...
                        </h1>
                    ) : (
                        <div
                            className="flex overflow-y-hidden overflow-x-scroll scrollbar-none gap-4 p-4 pt-0 scroll-smooth transition-all  "
                            ref={next}
                        >
                            <button
                                className=" absolute right-0 text-8xl opacity-40 mt-[85px] hover:opacity-70 
                            transition-all  active:opacity-40"
                                onClick={() => handleRightClick()}
                            >
                                <FcNext />
                            </button>
                            <button
                                className=" absolute left-0 text-8xl opacity-40 mt-[85px] hover:opacity-70
                             transition-all active:opacity-40"
                                onClick={() => handleLeftClick()}
                            >
                                <FcPrevious />
                            </button>
                            {vegitables?.map((vegitable, index) => {
                                return (
                                    <ProductCard
                                        key={vegitable._id}
                                        name={vegitable.name}
                                        image={vegitable.image}
                                        price={vegitable.price}
                                        discription={vegitable.discription}
                                        category={vegitable.category}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/*-------------------------------------- filters --------------------------------- */}
            <div>
                <div className=" font-bold text-2xl p-4">
                    <h1>Categories</h1>
                </div>
                <div className="text-2xl p-4">
                    {filters?.map((category, index) => {
                        return <h4>{category}</h4>;
                    })}
                </div>
            </div>

            {/*--------------------------------- All products --------------------------------- */}
            <div>All and filtered products</div>
        </>
    );
}

export default Home;
