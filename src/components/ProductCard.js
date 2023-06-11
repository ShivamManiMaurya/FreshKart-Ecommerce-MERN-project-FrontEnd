import React from "react";

const ProductCard = ({ image, name, price, discription, category }) => {
    return (
        <div className=" ">
            <div className="bg-zinc-400 w-60 border-4 border-zinc-600 h-full p-3">
                <img
                    src={image}
                    alt=""
                    className="h-[150px] w-full object-cover"
                />
                <h1>{name}</h1>
                <h4>₹{price}</h4>
                <p>{category}</p>
                <button
                    className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center m-auto 
            shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                >
                    Add Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
