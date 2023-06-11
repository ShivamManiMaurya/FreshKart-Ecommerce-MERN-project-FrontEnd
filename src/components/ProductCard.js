import React from "react";

const ProductCard = ({ image, name, price, discription, category }) => {
    return (
        <div className=" ">
            <div className="bg-zinc-400 w-60 border-4 border-zinc-600">
                <img src={image} alt="" />
                <h1>{name}</h1>
                <h4>{price}</h4>
            </div>
        </div>
    );
};

export default ProductCard;
