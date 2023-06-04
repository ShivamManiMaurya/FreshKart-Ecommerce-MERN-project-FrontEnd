import React from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Header() {
    return (
        <header className=" fixed shadow-md w-full h-[70px] bg-black px-4 lg:px-16">
            <div className="flex items-center justify-between">
                <Link to={""}>
                    <div className="w-fit">
                        <img src={logo} alt="logo" className="h-[70px]" />
                    </div>
                </Link>
                <div className="flex items-center justify-between gap-4 lg:gap-6">
                    <nav className="text-white flex gap-4 lg:gap-6 text-lg font-bold mr-4 lg:mr-10">
                        <Link to={""} className="hover:text-red-700 ">
                            Home
                        </Link>
                        <Link to={"menu"} className="hover:text-red-700 ">
                            Menu
                        </Link>
                        <Link to={"about"} className="hover:text-red-700 ">
                            About
                        </Link>
                        <Link to={"contact"} className="hover:text-red-700 ">
                            Contact
                        </Link>
                    </nav>
                    <div className="text-white  hover:text-red-700 text-4xl">
                        <Link to={"cart"}>
                            <FaShoppingCart />
                        </Link>
                    </div>
                    <div className="text-white hover:text-red-700 text-4xl">
                        <Link to={"user"}>
                            <FaUser />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
