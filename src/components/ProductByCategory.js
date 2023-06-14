import React, { useRef } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import ProductCard from "./ProductCard";

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
        <div>
            <h4 className=" text-2xl font-bold p-4 ">{categoryName}</h4>
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
