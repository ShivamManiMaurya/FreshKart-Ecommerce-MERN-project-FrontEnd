import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, fetchProduct } from "../redux/productSlice";
import ProductByCategory from "../components/ProductByCategory";
import { deleteProduct } from "../api";
import toast from "react-hot-toast";

function ProductDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { filterid } = useParams();

    const { email } = useSelector((state) => state.user);
    const { data: products, status } = useSelector((state) => state.product);
    const product = products.filter((product) => product._id === filterid)[0];

    useEffect(() => {
        dispatch(fetchProduct());
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

    const handleBuy = () => {
        const cartProduct = {
            id: filterid,
            name: product?.name,
            price: product?.price,
            category: product?.category,
            image: product?.image,
        };
        dispatch(addToCart(cartProduct));
        navigate("/cart");
    };

    const handleProdDelete = () => {
        deleteProduct(product?._id);
        toast("Product deleted successfully.");
        navigate("/");
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
                                    onClick={handleBuy}
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
                                {email === process.env.REACT_APP_ADMIN && (
                                    <button
                                        className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center m-auto 
                                 shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                                        onClick={handleProdDelete}
                                    >
                                        Delete Product
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <h1 className="font-bold text-4xl">
                        Similar Category Products
                    </h1>
                    <ProductByCategory
                        category={product?.category}
                        id={product?._id}
                        status={status}
                        products={products}
                    />
                </div>
            )}{" "}
        </>
    );
}

export default ProductDetails;
