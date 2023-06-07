import React, { useState } from "react";
import loginGifAnimation from "../assets/images/logo/loginLogo.gif";
import { Link, useNavigate } from "react-router-dom";
import { ImageToBase64 } from "../utilities/ImageToBase64.js";
import axios from "axios";
import { fetchData } from "../api";

function Signup() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: "",
    });
    const [checkRequiredField, setCheckReqField] = useState(false);
    const [passwordMatch, setPassswordMatch] = useState(false);

    // console.log(process.env.REACT_APP_SERVER_DOMAIN);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, email, password, confirmPassword } = data;
        if (firstName && email && password && confirmPassword) {
            setCheckReqField(false);
            if (password === confirmPassword) {
                // const fetchData = await axios.post(
                //     `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
                //     data
                // );

                const dataRes = await fetchData(data);
                console.log(dataRes);

                // console.log(data.image);
                // alert("successfull");
                // navigate("/login");
            } else {
                setPassswordMatch(true);
            }
        } else {
            setCheckReqField(true);
            setPassswordMatch(false);
            // alert("Check Required * fields first");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleFileInput = async (e) => {
        const val = await ImageToBase64(e.target.files[0]);
        setData((prev) => {
            return {
                ...prev,
                image: val,
            };
        });
    };

    return (
        <div className="flex h-full justify-center items-center">
            <div className=" pt-3 w-full max-w-sm bg-white rounded-sm shadow-sm shadow-zinc-500">
                <div className="w-[100px] pb-0 m-auto">
                    <img
                        src={loginGifAnimation}
                        alt=""
                        className=" animate-wiggle"
                    />
                </div>
                <form action="" className=" mx-8 pb-4" onSubmit={handleSubmit}>
                    <label htmlFor="firstName" className="pl-2 font-bold">
                        First Name<span className="text-red-700">*</span>
                        <span className=" text-sm font-normal">
                            (Indicates required field)
                        </span>
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                        value={data.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="lastName" className="pl-2 font-bold">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                        value={data.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="email" className="pl-2 font-bold">
                        Email<span className="text-red-700">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                        value={data.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="email" className="pl-2 font-bold">
                        Password<span className="text-red-700">*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                        value={data.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="email" className="pl-2 font-bold">
                        Confirm Password<span className="text-red-700">*</span>
                    </label>

                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                        value={data.confirmPassword}
                        onChange={handleChange}
                    />
                    <label htmlFor="image" className="pl-2 font-bold">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        className="w-full h-10 rounded-sm px-1 mb-2 mt-0.5"
                        accept="image/*"
                        // value={data.image}
                        onChange={handleFileInput}
                    />
                    {checkRequiredField && (
                        <p className="pb-2 flex items-center justify-center gap-1 text-xs">
                            Please check the required
                            <span className="text-red-700">*</span> fields first
                        </p>
                    )}
                    {passwordMatch && (
                        <p className="pb-2 flex items-center justify-center gap-1 text-xs text-red-700">
                            Password and confirm password does not match
                        </p>
                    )}
                    <button
                        type="submit"
                        className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center m-auto 
                    shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="flex items-center justify-center pb-5 text-sm">
                    Already have Account?{" "}
                    <Link
                        to={"/login"}
                        className="ml-2 text-red-700 hover:underline hover:text-red-700 active:no-underline font-bold"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
