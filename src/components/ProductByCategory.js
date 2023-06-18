import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import { BsFillBasket2Fill } from "react-icons/bs";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { ImSpinner10 } from "react-icons/im";

const ProductByCategory = ({ category, status, products }) => {
    const categoryWiseProduct = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
    );

    const categoryName = category[0].toUpperCase() + category.slice(1);

    const next = useRef();

    const handleRightClick = () => {
        next.current.scrollLeft += 400;
    };

    const handleLeftClick = () => {
        next.current.scrollLeft -= 400;
    };

    return (
        <div className="">
            <h4 className=" flex items-center gap-2 text-2xl font-bold p-4 underline decoration-red-700 ">
                <BsFillBasket2Fill className=" text-red-700" />
                {categoryName}
            </h4>
            <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-none gap-4 p-4 pt-0">
                {status === "loading" ? (
                    <h1 className="flex items-center justify-center m-auto h-full font-bold text-5xl animate-spin">
                        <ImSpinner10 />
                    </h1>
                ) : (
                    <div
                        className="flex overflow-y-hidden overflow-x-scroll scrollbar-none gap-4 p-4 pt-0 scroll-smooth transition-all  "
                        ref={next}
                    >
                        <button
                            className=" absolute right-0 z-20 text-7xl md:text-9xl opacity-40 mt-[85px] hover:opacity-70 
                            transition-all  active:opacity-40"
                            onClick={() => handleRightClick()}
                        >
                            <MdNavigateNext className=" text-red-700" />
                        </button>
                        <button
                            className=" absolute left-0 z-20 text-7xl md:text-9xl opacity-40 mt-[85px] hover:opacity-70
                             transition-all active:opacity-40"
                            onClick={() => handleLeftClick()}
                        >
                            <MdNavigateBefore className=" text-red-700" />
                        </button>
                        {categoryWiseProduct?.map((product, index) => {
                            return (
                                <ProductCard
                                    key={product._id}
                                    id={product._id}
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                    discription={product.discription}
                                    category={product.category}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductByCategory;
