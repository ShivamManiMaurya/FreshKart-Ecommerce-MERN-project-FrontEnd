import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { toast } from "react-hot-toast";

function Header() {
    const dispatch = useDispatch();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showAfterRefresh, setShowAfterRefresh] = useState(false);
    const [cartValue, setCartValue] = useState(0);

    const { image: profileImage } = useSelector((state) => state.user);

    const handleUserClick = () => {
        setShowAfterRefresh(true);
        setShowUserMenu((prev) => !prev);
    };

    const handleLogout = () => {
        // console.log("before = ", profileImage);
        dispatch(removeUser());
        toast("You have been successfully logged out.");
        // console.log("after = ", profileImage);
    };

    // useEffect(() => {
    //     console.log(profileImage);
    // }, [profileImage]);

    return (
        <header className=" fixed shadow-md shadow-zinc-700 w-full h-[70px] bg-black px-4 lg:px-16 z-50">
            <div className="flex items-center justify-between">
                <Link to={""}>
                    <div className="w-fit">
                        <img src={logo} alt="logo" className="h-[70px]" />
                    </div>
                </Link>
                <div className="flex items-center justify-between gap-4 lg:gap-6">
                    <nav className="text-white flex gap-4 lg:gap-6 text-lg font-bold mr-4 lg:mr-10">
                        <Link
                            to={""}
                            className="hover:text-red-700 transition-all"
                        >
                            Home
                        </Link>
                        <Link
                            to={"menu"}
                            className="hover:text-red-700 transition-all"
                        >
                            Menu
                        </Link>
                        <Link
                            to={"about"}
                            className="hover:text-red-700 transition-all"
                        >
                            About
                        </Link>
                        <Link
                            to={"contact"}
                            className="hover:text-red-700 transition-all"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="text-white  hover:text-red-700 text-4xl transition-all">
                        <Link to={"cart"}>
                            <FaShoppingCart />
                            <div
                                className={`${
                                    cartValue > 0 ? "animate-bounce" : ""
                                } transition-all absolute top-2 right-[60px] lg:right-[116px] bg-orange-600 rounded-full px-1 text-sm text-white border text-center`}
                            >
                                {cartValue}
                            </div>
                        </Link>
                    </div>
                    <div
                        className="text-white text-4xl"
                        onClick={handleUserClick}
                    >
                        <div className="">
                            <div className="hover:text-red-700 w-10 h-10 cursor-pointer transition-all ">
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt="profile"
                                        className="w-full h-full overflow-hidden"
                                    ></img>
                                ) : (
                                    <FaUser />
                                )}
                            </div>
                            {showUserMenu ? (
                                <div
                                    className={`${
                                        showUserMenu
                                            ? "animate-scaleUp"
                                            : "animate-scaleDown"
                                    } w-[110px] h-[65px] absolute right-0 text-left p-2 text-base bg-black shadow-md shadow-zinc-700`}
                                >
                                    <ul>
                                        <li className=" cursor-pointer hover:text-red-700 transition-all">
                                            <Link to={"newproduct"}>
                                                New Product
                                            </Link>
                                        </li>
                                        <li className=" cursor-pointer hover:text-red-700 transition-all">
                                            {profileImage ? (
                                                <p onClick={handleLogout}>
                                                    LogOut
                                                </p>
                                            ) : (
                                                <Link to={"login"}>LogIn</Link>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                showAfterRefresh && (
                                    <div className=" bg-black h-[65px] w-[110px] absolute right-0 animate-scaleDown opacity-0 text-left text-base p-2 shadow-zinc-700 shadow-md">
                                        <ul>
                                            <li>New Product</li>
                                            {profileImage ? (
                                                <li>LogOut</li>
                                            ) : (
                                                <li>LogIn</li>
                                            )}
                                        </ul>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
