import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/productSlice";

const ProductCard = ({ id, image, name, price, category }) => {
    const dispatch = useDispatch();
    // const [cartProducts, setCartProducts] = useState([]);

    const handleAddToCart = (id) => {
        const cartProduct = id;
        dispatch(addToCart(cartProduct));
    };

    return (
        <div className=" ">
            <div className="bg-zinc-400 w-60 border-4 border-zinc-600 h-full p-3">
                <Link
                    to={`/productdetails/${id}`}
                    onClick={() =>
                        window.scrollTo({ top: "0", behavior: "smooth" })
                    }
                >
                    <img
                        src={image}
                        alt=""
                        className="h-[150px] w-full object-cover"
                    />
                    <h1>{name}</h1>
                </Link>
                <h4>₹{price}</h4>
                <p>{category}</p>

                <button
                    className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center 
                    m-auto shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                    onClick={() => handleAddToCart(id)}
                >
                    Add Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
