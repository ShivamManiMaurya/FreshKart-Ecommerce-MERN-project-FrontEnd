import React, { useState } from "react";
import loginGifAnimation from "../assets/images/logo/loginLogo.gif";
import { Link, useNavigate } from "react-router-dom";
import { fetchLoginData } from "../api";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [checkRequiredField, setCheckReqField] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        if (email && password) {
            setCheckReqField(false);
            const dataRes = await fetchLoginData(data);
            console.log("dataRes = ", dataRes);
            dispatch(addUser(dataRes.data.backendData));
            if (dataRes.data.alert) {
                console.log("data: ", data);
                toast(
                    dataRes.data.backendData.firstName +
                        " is successfully Logedin..."
                );
                // navigate("/");
            }
        } else {
            setCheckReqField(true);
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
                    <label htmlFor="email" className="pl-2 font-bold">
                        Email<span className="text-red-700">*</span>
                        <span className=" text-sm font-normal">
                            (Indicates required field)
                        </span>
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
                        className="w-full h-10 bg-zinc-200 rounded-sm px-2 shadow-sm shadow-zinc-500 mb-5"
                        value={data.password}
                        onChange={handleChange}
                    />

                    {checkRequiredField && (
                        <p className="pb-2 flex items-center justify-center gap-1 text-xs">
                            Please check the required
                            <span className="text-red-700">*</span> fields first
                        </p>
                    )}
                    <button
                        type="submit"
                        className="bg-black text-white py-2 px-4 rounded-md font-bold flex items-center justify-center m-auto 
            shadow-md shadow-zinc-500 hover:text-red-700 active:shadow-none"
                    >
                        Login
                    </button>
                </form>
                <p className="flex items-center justify-center pb-5 text-sm">
                    Don't have Account?{" "}
                    <Link
                        to={"/signup"}
                        className="ml-2 text-red-700 hover:underline hover:text-red-700 active:no-underline font-bold"
                    >
                        SignUp
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
