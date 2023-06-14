import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/productSlice";

function Cart() {
    const dispatch = useDispatch();
    const {
        data: products,
        cartData: cartAddedIds,
        status,
    } = useSelector((state) => state.product);
    console.log(status);

    const cartProducts = cartAddedIds.map(
        (id, index) => products.filter((product) => product._id === id)[0]
    );

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div>
            <h2>Cart</h2>
            {cartProducts?.map((product, index) => {
                return (
                    <div
                        key={product._id}
                        className="flex items-center justify-center gap-2 p-2"
                    >
                        <div className="w-[150px] h-[150px]">
                            <img src={product.image} alt="Product" />
                        </div>
                        <div>
                            <h4>{product.name}</h4>
                            <div className="flex gap-4">
                                {" "}
                                <h6>{product.price}</h6>
                                <h6>{product.category}</h6>
                            </div>
                            <p className="w-[400px]">
                                {product.discription.slice(0, 80)}...
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
                                    onClick={() => handleRemove(product._id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Cart;
