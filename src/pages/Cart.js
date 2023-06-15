import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseItem,
    increaseItem,
    removeFromCart,
} from "../redux/productSlice";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";

function Cart() {
    const dispatch = useDispatch();
    const { cartData, status } = useSelector((state) => state.product);

    // const cartProducts = cartData.map(
    //     (item, index) =>
    //         products.filter((product) => product._id === item.id)[0]
    // );
    // console.log(cartProducts);
    // console.log(cartData);

    const subtotal = cartData.reduce((acc, crr) => {
        return acc + parseFloat(crr.total);
    }, 0);

    const totalQuantity = cartData.reduce((acc, crr) => {
        return acc + parseInt(crr.qty);
    }, 0);

    const handleRemove = (id) => {
        console.log(id);
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

    if (totalQuantity <= 0) {
        return (
            <div>
                <h2>Cart</h2>
                <h4>Your FreshKart Cart is Empty</h4>
            </div>
        );
    }

    return (
        <div>
            {cartData?.map((product, index) => {
                return (
                    <div key={product?.id} className="flex gap-2 p-2">
                        <div className="w-[150px] h-[150px]">
                            <img src={product?.image} alt="Product" />
                        </div>
                        <div>
                            <div className=" flex justify-between items-center">
                                <h4>{product?.name}</h4>
                                <div className="flex gap-2 text-2xl p-2">
                                    <button
                                        className=" hover:opacity-70 active:text-[25px] active:p-0"
                                        onClick={() =>
                                            handleIncrease(product?.id)
                                        }
                                    >
                                        <AiFillPlusSquare />
                                    </button>
                                    <button
                                        className=" hover:opacity-70 active:text-[25px] active:p-0"
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
                            <div className="flex gap-4">
                                {" "}
                                <div>
                                    <h6>Price: {product.price}</h6>
                                </div>
                                <div>
                                    <h6>Total: {product.total}</h6>
                                    <h6>Category: {product?.category}</h6>
                                </div>
                                <h6>Quantity: {product.qty}</h6>
                            </div>
                            <p className="w-[400px]">
                                {/* {product?.discription.slice(0, 80)}... */}
                            </p>
                            <div className="flex">
                                <button
                                    className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center 
                                m-auto shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                                >
                                    Buy
                                </button>
                                <button
                                    className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center 
                                m-auto shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                                    onClick={() => handleRemove(product?.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div>
                Subtotal ({totalQuantity} items): {subtotal}
            </div>
        </div>
    );
}

export default Cart;
