import React, { useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
import { ImageToBase64 } from "../utilities/ImageToBase64";
import { fetchProductData } from "../api";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function NewProduct() {
    const initialCategories = ["Fruits", "Vegitables", "Pizza", "Burgers"];
    const [categories, setCategories] = useState(initialCategories);
    const [newCategory, setNewCategory] = useState("");
    const { email } = useSelector((state) => state.user);

    const initialProdData = {
        name: "",
        category: "",
        image: "",
        price: 0,
        discription: "",
    };

    const [prodData, setProdData] = useState(initialProdData);

    const handleAddCategory = () => {
        setCategories([...categories, newCategory]);
        setNewCategory("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(prodData);
        const { name, category, image, price, discription } = prodData;
        if (name && category && image && price && discription) {
            const dataRes = await fetchProductData(prodData);
            console.log("post = ", dataRes);
            toast("Product added successfully.");
            setProdData(initialProdData);
        } else {
            console.log("please enter the required values");
        }
    };

    const handleProdInput = (e) => {
        const { name, value } = e.target;
        setProdData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleImageInput = async (e) => {
        const prodImageFile = await ImageToBase64(e.target.files[0]);
        // console.log(prodImageFile);
        setProdData((prev) => {
            return {
                ...prev,
                image: prodImageFile,
            };
        });
    };

    // useEffect(() => {
    //     console.log(prodData);
    // }, [prodData]);

    return (
        <div className="flex h-full justify-center items-center">
            {email !== process.env.REACT_APP_ADMIN ? (
                <h1>Admin is Logged out...Please login to Add products...!</h1>
            ) : (
                <div className=" pt-3 w-full max-w-sm bg-white rounded-sm shadow-sm shadow-zinc-500">
                    {" "}
                    <h1>Product Upload</h1>
                    <form
                        action=""
                        className=" mx-8 pb-4"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="name" className="pl-2 font-bold">
                            Name<span className="text-red-700">*</span>
                            <span className=" text-sm font-normal">
                                (Indicates required field)
                            </span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                            value={prodData.name}
                            onChange={handleProdInput}
                        />
                        <div className="mb-1 flex">
                            <label
                                htmlFor="category"
                                className="pl-2 font-bold mr-4"
                            >
                                Category<span className="text-red-700">*</span>
                            </label>
                            <select
                                name="category"
                                id="category"
                                className="w-full bg-zinc-200"
                                onChange={handleProdInput}
                                value={prodData.category}
                            >
                                <option value={"other"}>Select Category</option>
                                {categories.map((category, index) => {
                                    return (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="flex items-center justify-between m-auto">
                            <label
                                htmlFor="addCategory"
                                className="pl-2 font-bold mr-2"
                            >
                                Add Category
                            </label>
                            <input
                                type="text"
                                id="addCategory"
                                name="addCategory"
                                placeholder="Add Category"
                                className="w-[120px] h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={handleAddCategory}
                                className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center m-auto 
            shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                            >
                                Add
                            </button>
                        </div>
                        <div>
                            <label htmlFor="image" className="pl-2 font-bold">
                                Image<span className="text-red-700">*</span>
                                {/* <label htmlFor="uploadImage"> */}
                                <div
                                    // id="image"
                                    className="bg-zinc-200 w-full h-20 text-5xl flex justify-center items-center rounded-md cursor-pointer hover:text-zinc-700 active:text-black"
                                >
                                    {prodData.image ? (
                                        <img
                                            src={prodData.image}
                                            alt="product"
                                            className="w-20 h-20"
                                        />
                                    ) : (
                                        <MdDriveFolderUpload />
                                    )}

                                    <input
                                        id="image"
                                        type={"file"}
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageInput}
                                    />
                                </div>{" "}
                            </label>
                            {/* </label> */}
                        </div>
                        <label htmlFor="price" className="pl-2 font-bold">
                            Price<span className="text-red-700">*</span>
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Price"
                            className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                            value={prodData.price}
                            onChange={handleProdInput}
                            onKeyDown={(evt) =>
                                evt.key === "e" && evt.preventDefault()
                            }
                        />
                        <label htmlFor="discription" className="pl-2 font-bold">
                            Discription
                            <span className="text-red-700">*</span>
                        </label>
                        <textarea
                            row={3}
                            id="discription"
                            name="discription"
                            placeholder="Discription"
                            className="w-full h-full bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                            value={prodData.discription}
                            onChange={handleProdInput}
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center m-auto 
            shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default NewProduct;
