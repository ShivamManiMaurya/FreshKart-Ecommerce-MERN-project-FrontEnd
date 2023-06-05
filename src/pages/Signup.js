import React from "react";
import loginGifAnimation from "../assets/images/logo/loginLogo.gif";
import { Link } from "react-router-dom";

function Signup() {
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
                <form action="" className=" mx-8 pb-4">
                    <label htmlFor="firstName" className="pl-2 font-bold">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
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
                    />
                    <label htmlFor="email" className="pl-2 font-bold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                    />
                    <label htmlFor="email" className="pl-2 font-bold">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-2"
                    />
                    <label htmlFor="email" className="pl-2 font-bold">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        placeholder="Confirm Password"
                        className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-5"
                    />
                    <button
                        className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center m-auto 
                    shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                    >
                        Submit
                    </button>
                </form>
                <p className="flex items-center justify-center pb-5 text-sm">
                    Already have Account?{" "}
                    <Link className="ml-2 text-red-700 hover:underline hover:text-red-700 active:no-underline font-bold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
