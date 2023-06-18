import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/productSlice";

const ProductCard = ({ id, image, name, price, category }) => {
    const dispatch = useDispatch();
    // const [cartProducts, setCartProducts] = useState([]);

    const handleAddToCart = () => {
        const cartProduct = {
            id: id,
            name: name,
            price: price,
            category: category,
            image: image,
        };
        dispatch(addToCart(cartProduct));
    };

    return (
        <div className=" ">
            <div className=" w-60 lg:w-[200px] xl:w-60 2xl:w-80 rounded-md shadow-md md:shadow-none hover:md:shadow-md  h-fit pb-4 hover:scale-105 ">
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
                    <h1 className="px-4 font-bold mt-2">{name}</h1>
                </Link>
                <h4 className="px-4 text-lg">
                    <span className="text-red-700 font-bold pr-1">₹</span>
                    {price}
                </h4>
                <p className="px-4 text-sm">
                    <spna className="font-bold">Category:</spna> {category}
                </p>

                <div className="mx-3 ">
                    {" "}
                    <button
                        className="bg-black w-full text-white py-2 px-4 mt-2 rounded-md font-bold flex items-center justify-center 
                    m-auto shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                        onClick={handleAddToCart}
                    >
                        Add Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
