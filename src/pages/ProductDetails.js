import React, { useEffect } from "react";
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
                    <div className="flex flex-col lg:flex-row items-center justify-center pt-10 lg:py-10 lg:gap-10 ">
                        <img
                            src={product?.image}
                            alt="Product"
                            className=" w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] object-cover border shadow-sm sm:shadow-none sm:border-none "
                        />
                        <div className=" pt-10 pb-10 px-8 lg:px-0 lg:pb-0 lg:pt-20">
                            <h1 className=" px-4 text-4xl sm:text-6xl  pb-4">
                                {product?.name}
                            </h1>
                            <h4 className="px-4 text-2xl sm:text-4xl pb-4">
                                <span className="text-red-700 font-bold pr-1">
                                    ₹
                                </span>
                                <span className=" text-blue-600">
                                    {product?.price}
                                </span>
                            </h4>
                            <p className="px-4 text-xl sm:text-3xl pb-4">
                                <span className=" text-2xl sm:text-4xl">
                                    Category:
                                </span>{" "}
                                {product?.category}
                            </p>
                            <p className="px-4 text-base sm:text-xl pb-4 lg:w-[500px] ">
                                {product?.discription}
                            </p>
                            <div className="flex items-center justify-start px-4 gap-4 py-2 sm:py-4 w-fit text-sm sm:text-base">
                                <button
                                    className="bg-black text-white py-1.5 sm:py-2 px-2.5 sm:px-4 rounded-md font-bold  
                                shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                                    onClick={handleBuy}
                                >
                                    Buy Now
                                </button>
                                <button
                                    className="bg-black text-white py-1.5 sm:py-2 px-2.5 sm:px-4 rounded-md font-bold 
                                 shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                                    onClick={handleAddToCart}
                                >
                                    Add Cart
                                </button>
                                {email === process.env.REACT_APP_ADMIN && (
                                    <button
                                        className="bg-black text-white py-1.5 sm:py-2 px-2.5 sm:px-4 rounded-md font-bold  
                                 shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                                        onClick={handleProdDelete}
                                    >
                                        Delete Product
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className=" w-1/2 border-b-2 flex items-center justify-center m-auto mb-10"></div>
                    <div className=" flex items-center justify-center m-auto underline decoration-red-700 mb-10">
                        <h1 className="font-bold text-4xl">Similar Products</h1>
                    </div>
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
