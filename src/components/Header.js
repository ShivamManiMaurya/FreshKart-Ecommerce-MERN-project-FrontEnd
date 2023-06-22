import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import { ImMenu } from "react-icons/im";
import { Link as ScrollLink } from "react-scroll";

function Header() {
    const dispatch = useDispatch();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showAfterRefresh, setShowAfterRefresh] = useState(false);
    const [showToggleAfterRefresh, setShowToggleAfterRefresh] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showShadow, setShowShadow] = useState(false);

    const { image: profileImage, email } = useSelector((state) => state.user);
    const { cartData } = useSelector((state) => state.product);

    const quantity = cartData.reduce((acc, crr) => {
        return acc + parseInt(crr.qty);
    }, 0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 700) {
                setShowShadow(false);
            } else {
                setShowShadow(true);
            }
        });

        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

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
        setShowToggleAfterRefresh(true);
    };

    return (
        <header
            className={`${
                showShadow && "shadow-md shadow-red-800"
            } fixed  w-screen h-[70px] bg-black px-4 lg:px-16 z-50`}
        >
            {/*---------------------------------- div that wraps all ------------------------------------- */}
            <div className="flex items-center justify-between">
                {/*------------------------------------- FreshKart Logo and Link ------------------------------ */}
                <Link
                    to={""}
                    onClick={() =>
                        window.scrollTo({
                            top: "0",
                            behavior: "smooth",
                        })
                    }
                >
                    <div className="flex items-center justify-center md:flex-none md:w-fit">
                        <img src={logo} alt="logo" className="h-[70px]" />
                    </div>
                </Link>

                {/*---------------------- Search, Menu, Cart, User, MenuButton parent div ---------------------------- */}
                <div className="flex items-center justify-between gap-3 lg:gap-6">
                    {/*----------------------------- Search bar and button --------------------------------- */}
                    {/* <div
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
                    </div> */}

                    {/*--------------------------------- All menu links --------------------------------*/}

                    {/************************** mobile screen links ********************************/}
                    {showMenu ? (
                        <nav
                            className={`${
                                showMenu &&
                                "animate-scaleUp md:animate-none md:hidden "
                            }  text-white absolute top-[73px] left-0 p-4 bg-black w-full  
                        flex flex-col gap-3 font-bold mr-0 `}
                        >
                            <Link
                                to={""}
                                className="hover:text-red-700 transition-all"
                                onClick={() =>
                                    window.scrollTo({
                                        top: "0",
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Home
                            </Link>
                            <Link
                                to={"about"}
                                className="hover:text-red-700 transition-all"
                                onClick={() =>
                                    window.scrollTo({
                                        top: "0",
                                        behavior: "smooth",
                                    })
                                }
                            >
                                About
                            </Link>
                            <ScrollLink
                                to={"footer"}
                                className="hover:text-red-700 transition-all cursor-pointer"
                                offset={-140}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="active"
                            >
                                Contact
                            </ScrollLink>
                        </nav>
                    ) : (
                        showToggleAfterRefresh && (
                            <nav
                                className=" animate-scaleDown md:animate-none md:hidden opacity-0 bg-black text-white absolute top-[73px] left-0 p-4 w-full  
                        flex flex-col gap-3 font-bold mr-0 "
                            >
                                <div>Home</div>
                                <div>About</div>
                                <div>Contact</div>
                            </nav>
                        )
                    )}

                    {/************************** medium and large screen links ********************************/}
                    <nav
                        className={` hidden text-white md:top-[73px] md:p-0 bg-black w-full  
                        md:flex md:flex-row md:gap-3 lg:gap-6 lg:text-lg font-bold md:mr-0 lg:mr-2`}
                    >
                        <Link
                            to={""}
                            className="hover:text-red-700 transition-all"
                            onClick={() =>
                                window.scrollTo({
                                    top: "0",
                                    behavior: "smooth",
                                })
                            }
                        >
                            Home
                        </Link>
                        <Link
                            to={"about"}
                            className="hover:text-red-700 transition-all"
                            onClick={() =>
                                window.scrollTo({
                                    top: "0",
                                    behavior: "smooth",
                                })
                            }
                        >
                            About
                        </Link>
                        <ScrollLink
                            to={"footer"}
                            className="hover:text-red-700 transition-all cursor-pointer"
                            offset={-140}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active"
                        >
                            Contact
                        </ScrollLink>
                    </nav>

                    {/* -------------------------------- Cart button icon----------------------------------------  */}
                    <div className="text-white  hover:text-red-700 text-2xl lg:text-4xl transition-all">
                        <Link
                            to={"cart"}
                            onClick={() =>
                                window.scrollTo({
                                    top: "0",
                                    behavior: "smooth",
                                })
                            }
                        >
                            <FaShoppingCart />
                            <div
                                className={`${
                                    quantity > 0 ? "animate-bounce" : ""
                                } transition-all absolute top-4 lg:top-3 right-[96px] md:right-[60px] lg:right-[128px]
                                 bg-red-600 rounded-full px-1 text-xs lg:text-sm text-white border-2 text-center font-bold`}
                            >
                                {quantity}
                            </div>
                        </Link>
                    </div>

                    {/*--------------------------- User Button Icon and Image Logic -------------------  */}
                    <div className="text-white" onClick={handleUserClick}>
                        <div className="">
                            <div className="hover:text-red-700 w-8 h-8 lg:w-10 lg:h-10 cursor-pointer transition-all ml-2 mr-1 mt-[2px] lg:mt-0">
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt="profile"
                                        className="w-full h-full overflow-hidden rounded-full"
                                    ></img>
                                ) : (
                                    <FaUser className="w-fit text-2xl lg:text-4xl ml-1 md:ml-0" />
                                )}
                            </div>
                            {showUserMenu ? (
                                <div
                                    className={`${
                                        showUserMenu && "animate-scaleUp "
                                    } w-[110px] h-fit absolute right-0 text-left p-2 text-base bg-black shadow-md shadow-zinc-700`}
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
                                    <div className=" bg-black h-fit w-[110px] absolute right-0 animate-scaleDown opacity-0 text-left text-base p-2 shadow-zinc-700 shadow-md">
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

                    {/*------------------------------------- Mobile view toggle button -------------------------------------- */}
                    <div className="text-white text-2xl mt-[2px] md:hidden active:text-red-700 hover:text-red-700">
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
