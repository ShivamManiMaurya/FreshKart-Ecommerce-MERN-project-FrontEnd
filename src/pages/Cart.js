import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseItem,
    increaseItem,
    removeFromCart,
} from "../redux/productSlice";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import empty from "../assets/images/loader/empty animation.gif";
import { ImSpinner10 } from "react-icons/im";

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartData } = useSelector((state) => state.product);
    const { email } = useSelector((state) => state.user);
    const [spinner, setSpinner] = useState(false);
    const url = "https://freshkart-ecommerce-mern-project-backend.onrender.com";

    const subtotal = cartData.reduce((acc, crr) => {
        return acc + parseFloat(crr.total);
    }, 0);

    const totalQuantity = cartData.reduce((acc, crr) => {
        return acc + parseInt(crr.qty);
    }, 0);

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrease = (id) => {
        dispatch(increaseItem(id));
    };

    const handleDecrease = (id, qty) => {
        if (qty <= 1) {
            dispatch(removeFromCart(id));
            return;
        }
        dispatch(decreaseItem(id));
    };

    const handlePayment = async () => {
        if (email) {
            // const stripePromise = await loadStripe(
            //     "pk_test_51NJWf9SBn3VU9HQMM0KID5RJTXkD2o2cMvDz9ffdmP7cae1cEYpgt6hQLa9vADG5Iwqd5TieUTBv6E9O0b8QW7NI00NRyryC3b"
            // );
            // const postPaymentData = await axios.post(
            //     `http://localhost:8080/create-checkout-session`,
            //     cartData
            // );
            // if (postPaymentData.statusCode === 500) return;
            // const dataRes = postPaymentData;
            // toast("Redirect to payment gatway.");
            // stripePromise.redirectToCheckout({ sessionId: dataRes });
            // *********************************************************************************************

            setSpinner(true);

            const stripePromise = await loadStripe(
                process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
            );
            const res = await fetch(`${url}/create-checkout-session`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(cartData),
            });
            if (res.statusCode === 500) return;

            const data = await res.json();

            toast("Redirect to payment Gateway...!");
            stripePromise.redirectToCheckout({ sessionId: data });
        } else {
            toast("You have not Login!");
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        }
    };

    if (totalQuantity <= 0) {
        return (
            <div className=" w-screen sm:w-auto sm:h-full h-screen  py-10 flex flex-col items-center gap-2 justify-center">
                <div className=" text-4xl font-bold flex items-center gap-2 justify-center  pb-8 underline decoration-red-700">
                    <FaShoppingCart className=" text-red-700 mt-2" />
                    <h2>Cart</h2>
                </div>
                <div className=" sm:w-[400px] sm:h-[400px]">
                    <img src={empty} alt="" />
                </div>
                <h4 className="text-4xl font-bold text-red-700 pt-8 text-center">
                    Your Cart is Empty...!
                </h4>
            </div>
        );
    }

    return (
        <div className="bg-white h-fit pb-10 sm:pb-0 md:h-full flex flex-col md:flex-row items-start pt-10 justify-center gap-2 lg:gap-4 px-2 md:px-4">
            <div>
                <div className=" text-4xl font-bold flex items-center gap-2 justify-center pb-8 underline decoration-red-700">
                    <FaShoppingCart className=" text-red-700 mt-2" />
                    <h2>Cart</h2>
                </div>
                {cartData?.map((product, index) => {
                    return (
                        <div
                            key={product?.id}
                            className="w-[calc(100vw-14px)] sm:w-auto flex border-b-2 py-2 "
                        >
                            <div className="w-[140px] h-[110px] sm:w-[150px] flex items-center justify-center">
                                <img
                                    src={product?.image}
                                    alt="Product"
                                    className=" w-full h-full object-cover"
                                />
                            </div>
                            <div className="  px-4 w-screen sm:w-[350px] lg:w-full">
                                <div className=" flex justify-between items-center ">
                                    <h4 className=" text-lg font-bold">
                                        {product?.name}
                                    </h4>
                                    <div className="flex text-4xl py-2 ">
                                        <button
                                            className=" hover:opacity-70 active:opacity-50 "
                                            onClick={() =>
                                                handleIncrease(product?.id)
                                            }
                                        >
                                            <AiFillPlusSquare />
                                        </button>
                                        <h6 className="text-lg flex items-center justify-center w-10">
                                            {product.qty}
                                        </h6>
                                        <button
                                            className=" hover:opacity-70 active:opacity-50"
                                            onClick={() =>
                                                handleDecrease(
                                                    product?.id,
                                                    product.qty
                                                )
                                            }
                                        >
                                            <AiFillMinusSquare />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-4 font-bold -mt-2">
                                    {" "}
                                    <div>
                                        <h6 className="">
                                            Price:{" "}
                                            <span className="text-red-700">
                                                ₹{" "}
                                            </span>
                                            {product.price.toFixed(2)}
                                        </h6>
                                    </div>
                                    <div>
                                        <h6>
                                            Category:{" "}
                                            <span className=" font-normal">
                                                {product?.category}
                                            </span>
                                        </h6>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                    <button
                                        className="bg-black text-white py-1 px-2 rounded-md font-bold 
                                    shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                                        onClick={() =>
                                            handleRemove(product?.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                    <h6 className="font-bold ">
                                        Total:{" "}
                                        <span className="text-red-700">₹ </span>{" "}
                                        <span className=" text-blue-700">
                                            {product.total.toFixed(2)}
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="flex justify-end gap-2 pr-4 font-bold pt-2 mb-10">
                    Subtotal ({totalQuantity} items):{" "}
                    <span className="text-red-700">₹ </span>{" "}
                    <span className="text-blue-700">{subtotal.toFixed(2)}</span>{" "}
                </div>
            </div>
            <div className=" w-[calc(100vw-14px)]  sm:w-[300px] pt-4 md:mt-[76px] flex flex-col justify-center">
                <h4 className=" text-xl font-bold text-zinc-500 border-b-2 pb-2 px-2">
                    PRICE DETAILS
                </h4>
                <div className="flex justify-between text-lg pt-2 px-2">
                    <h6>Total Quantity</h6>
                    <h6>{totalQuantity}</h6>
                </div>
                <div className="flex justify-between text-lg border-b-2 pb-2 px-2">
                    <h6>Delivery Fee</h6>
                    <h6>Free</h6>
                </div>
                <div className="flex justify-between text-xl py-2 px-2">
                    <h4 className=" font-bold">Total Amount</h4>
                    <h4 className=" font-bold text-blue-700">
                        <span className="text-red-700">₹ </span>
                        {subtotal.toFixed(2)}
                    </h4>
                </div>
                <button
                    className="bg-black text-white py-2 px-4 w-full rounded-md font-bold 
                                    shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none mb-10"
                    onClick={handlePayment}
                >
                    {spinner ? (
                        <ImSpinner10 className=" animate-spin text-2xl flex items-center justify-center m-auto" />
                    ) : (
                        <p>PLACE ORDER</p>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Cart;
