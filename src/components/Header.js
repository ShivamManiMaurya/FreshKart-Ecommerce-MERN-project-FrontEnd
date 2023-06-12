import React, { useState } from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import { BiSearchAlt } from "react-icons/bi";
import { ImMenu } from "react-icons/im";

function Header() {
    const dispatch = useDispatch();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showAfterRefresh, setShowAfterRefresh] = useState(false);
    const [cartValue, setCartValue] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    const { image: profileImage, email } = useSelector((state) => state.user);

    // const [profileImage, dkfl] = useState();

    // console.log(process.env.REACT_APP_ADMIN);
    // console.log("data = ", email);

    const handleUserClick = () => {
        setShowAfterRefresh(true);
        setShowUserMenu((prev) => !prev);
    };

    const handleLogout = () => {
        dispatch(removeUser());
        toast("You have been successfully logged out.");
    };

    const handleToggle = () => {
        setShowMenu((prev) => !prev);
    };

    return (
        <header className=" fixed shadow-md shadow-zinc-700 w-full :h-[70px] bg-black px-4 lg:px-16 z-50">
            {/*---------------------------------- div that wraps all ------------------------------------- */}
            <div className="flex items-center justify-between">
                {/*------------------------------------- FreshKart Logo and Link ------------------------------ */}
                <Link to={""}>
                    <div className="flex items-center justify-center md:flex-none md:w-fit">
                        <img src={logo} alt="logo" className="h-[70px]" />
                    </div>
                </Link>

                {/*---------------------- Search, Menu, Cart, User, MenuButton parent div ---------------------------- */}
                <div className="flex items-center justify-between gap-4 lg:gap-6">
                    {/*----------------------------- Search bar and button --------------------------------- */}
                    <div
                        className={`${
                            !showMenu && "hidden md:flex"
                        }  text-white flex absolute left-0 top-[90px] pl-4 md:p-0 md:static z-20`}
                    >
                        <input
                            type="text"
                            placeholder={""}
                            className=" bg-black p-1 rounded-l-md pl-2 border-2 border-white"
                        />
                        <button className=" active:text-lg active:px-[7px] border-e-2 border-t-2 border-b-2 border-white px-2 rounded-r-md">
                            <BiSearchAlt />
                        </button>
                    </div>

                    {/*--------------------------------- All menu links --------------------------------*/}
                    <nav
                        className={`${
                            !showMenu && "hidden md:flex"
                        } text-green-400 absolute md:static top-[73px] left-0 p-4 pt-[65px] md:p-0 bg-black w-full  
                        flex flex-col md:flex-row gap-3 lg:gap-6 lg:text-lg font-bold mr-0 lg:mr-2`}
                    >
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

                    {/* -------------------------------- Cart button icon----------------------------------------  */}
                    <div className="text-white  hover:text-red-700 text-2xl lg:text-4xl transition-all">
                        <Link to={"cart"}>
                            <FaShoppingCart />
                            <div
                                className={`${
                                    cartValue > 0 ? "animate-bounce" : ""
                                } transition-all absolute top-4 lg:top-2 right-[104px] md:right-[64px] lg:right-[116px]
                                 bg-orange-600 rounded-full px-1 text-xs lg:text-sm text-white border text-center`}
                            >
                                {cartValue}
                            </div>
                        </Link>
                    </div>

                    {/*--------------------------- User Button Icon and Image Logic -------------------  */}
                    <div className="text-white" onClick={handleUserClick}>
                        <div className="">
                            <div className="hover:text-red-700 w-10 h-10 cursor-pointer transition-all mt-4 lg:mt-0">
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt="profile"
                                        className="w-full h-full overflow-hidden"
                                    ></img>
                                ) : (
                                    <FaUser className=" text-2xl lg:text-4xl" />
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
                                        {process.env.REACT_APP_ADMIN ===
                                            email && (
                                            <li className=" cursor-pointer hover:text-red-700 transition-all">
                                                <Link to={"newproduct"}>
                                                    New Product
                                                </Link>
                                            </li>
                                        )}
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
                                            {process.env.REACT_APP_ADMIN ===
                                                email && <li>New Product</li>}
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

                    {/*------------------------------------- Menu button -------------------------------------- */}
                    <div className="text-white text-2xl md:hidden">
                        <button onClick={handleToggle}>
                            <ImMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
