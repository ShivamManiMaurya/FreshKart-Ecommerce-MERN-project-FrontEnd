import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, fetchProduct } from "../redux/productSlice";
import ProductByCategory from "../components/ProductByCategory";

function ProductDetails() {
    const dispatch = useDispatch();

    const { filterid } = useParams();
    // console.log("id = ", filterid);

    // console.log("name = ", data);

    const { data: products, status } = useSelector((state) => state.product);
    // console.log("dks= ", products);

    const product = products.filter((product) => product._id === filterid)[0];
    // console.log("prod = ", product?.name);

    useEffect(() => {
        dispatch(fetchProduct());
        // console.log("runs");
    }, []);

    const handleAddToCart = () => {
        const cartProduct = {
            id: filterid,
            name: product?.name,
            price: product?.price,
            category: product?.category,
            image: product?.image,
        };
        dispatch(addToCart(cartProduct));
    };

    return (
        <>
            {!product?.image ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <div className="flex">
                        <img src={product?.image} alt="" />
                        <div>
                            <h1>{product?.name}</h1>
                            <h4>₹{product?.price}</h4>
                            <p>{product?.category}</p>
                            <p>{product?.discription}</p>
                            <div className="flex">
                                <button
                                    className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center m-auto 
                                shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                                >
                                    Buy
                                </button>
                                <button
                                    className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center m-auto 
                                 shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                                    onClick={handleAddToCart}
                                >
                                    Add Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <h1 className="font-bold text-4xl">
                        Similar Category Products
                    </h1>
                    <ProductByCategory
                        category={product.category}
                        status={status}
                        products={products}
                    />
                </div>
            )}{" "}
        </>
    );
}

export default ProductDetails;
