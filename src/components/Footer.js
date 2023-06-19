import React from "react";
import logo from "../assets/images/logo/logo.png";
import {
    BsFillTelephoneFill,
    BsMailbox2,
    BsTwitter,
    BsFacebook,
    BsLinkedin,
    BsInstagram,
} from "react-icons/bs";
import {
    AiOutlineGlobal,
    AiFillMail,
    AiOutlineCopyright,
    AiOutlineGooglePlus,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
// import { BiLogoGooglePlus } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="bg-black text-white w-full mt-10  " id="footer">
            <div className=" flex items-start justify-evenly md:gap-2 lg:gap-4 py-10 lg:px-10">
                <div className="  px-4 hidden sm:flex sm:flex-col">
                    <div className=" flex items-end justify-start gap-2 mb-4">
                        <img
                            src={logo}
                            alt="logo"
                            className=" w-[60px] h-[40px]"
                        />
                        <h4 className=" text-3xl font-bold">FreshKart</h4>
                    </div>
                    <p className=" w-[220px] px-2 text-zinc-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur aliquid, natus minima magnam ipsum ex
                        voluptatum dicta consequatur iure accusamus.
                    </p>
                </div>
                <div className=" px-4 hidden sm:flex sm:flex-col">
                    <h4 className=" text-xl font-bold mb-4 underline underline-offset-8 decoration-red-700">
                        In News
                    </h4>
                    <ul>
                        <li className=" pb-1">
                            <h6 className=" text-sm font-bold">
                                Lorem, ipsum.
                            </h6>
                            <p className=" text-xs font-bold text-zinc-400">
                                October 14, 2022
                            </p>
                            <div className=" border-b-2 w-1/2 border-zinc-400 pt-2"></div>
                        </li>
                        <li className=" pb-1">
                            <h6 className=" text-sm font-bold">
                                Lorem, ipsum dolor.
                            </h6>
                            <p className=" text-xs font-bold text-zinc-400">
                                December 09, 2022
                            </p>
                            <div className=" border-b-2 w-1/2 border-zinc-400 pt-2"></div>
                        </li>
                        <li className=" pb-1">
                            <h6 className=" text-sm font-bold">
                                Lorem ipsum dolor sit.
                            </h6>
                            <p className=" text-xs font-bold text-zinc-400">
                                March 30, 2023
                            </p>
                            <div className=" border-b-2 w-1/2 border-zinc-400 pt-2"></div>
                        </li>
                        <li className=" pb-1">
                            <h6 className=" text-sm font-bold">
                                Lorem, ipsum.
                            </h6>
                            <p className=" text-xs font-bold text-zinc-400">
                                June 13, 2023
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="  px-4 hidden lg:flex lg:flex-col">
                    <h4 className=" text-xl font-bold mb-4 underline underline-offset-8 decoration-red-700">
                        Services
                    </h4>
                    <ul>
                        <li className=" pb-1">
                            <h6 className=" text-sm font-bold">
                                Lorem, ipsum.
                            </h6>
                            <div className=" border-b-2 w-1/3 border-zinc-400 pt-2"></div>
                        </li>
                        <li className=" pb-1">
                            <h6 className=" text-sm font-bold">
                                Lorem, ipsum dolor.
                            </h6>
                            <div className=" border-b-2 w-1/3 border-zinc-400 pt-2"></div>
                        </li>
                        <li className=" pb-1">
                            <h6 className=" text-sm font-bold">
                                Lorem, ipsum.
                            </h6>
                            <div className=" border-b-2 w-1/3 border-zinc-400 pt-2"></div>
                        </li>
                        <li className=" pb-1">
                            <h6 className=" text-sm font-bold">Lorem.</h6>
                            <div className=" border-b-2 w-1/3 border-zinc-400 pt-2"></div>
                        </li>
                        <li className=" pb-1">
                            <h6 className=" text-sm font-bold">
                                Lorem, ipsum dolor.
                            </h6>
                        </li>
                    </ul>
                </div>
                <div className=" px-4 ">
                    <h4 className=" text-xl font-bold mb-4 underline underline-offset-8 decoration-red-700">
                        Get in touch
                    </h4>
                    <div className=" flex items-center justify-start gap-2">
                        <BsFillTelephoneFill className=" text-sm text-zinc-300" />
                        <p>(+01) 123 456 7890</p>
                    </div>
                    <div className=" flex items-center justify-start gap-2">
                        <AiFillMail className=" text-zinc-300" />
                        <p>freshkart@demo.com</p>
                    </div>
                    <div className=" flex items-center justify-start gap-2">
                        <AiOutlineGlobal className="  text-zinc-300" />
                        <p>www.freshkartdemo.com</p>
                    </div>
                    <div className=" flex items-center justify-start gap-2">
                        <ImLocation className=" text-lg mt-1 text-zinc-300" />
                        <p>Fresh-Kart 24 Fith st., Lorem, ipsum, INDIA</p>
                    </div>
                    <div className=" flex py-4 items-center justify-start gap-4 text-xl">
                        <BsTwitter className=" hover:text-red-700 cursor-pointer" />
                        <BsFacebook className=" hover:text-red-700 cursor-pointer" />
                        <BsLinkedin className=" hover:text-red-700 cursor-pointer" />
                        <BsInstagram className=" hover:text-red-700 cursor-pointer" />
                        <AiOutlineGooglePlus className="hover:text-red-700 cursor-pointer text-3xl" />
                    </div>
                </div>
            </div>
            <div className=" w-full h-[60px] flex items-center justify-center lg:justify-between bg-red-700 sm:px-[100px]">
                <div>
                    <p className=" flex items-center justify-center text-xs sm:text-sm font-bold text-black">
                        Copyright
                        <span className="  ">
                            <AiOutlineCopyright className=" mt-1" />
                        </span>
                        2011<span className=" pr-1 text-black">FreshKart</span>{" "}
                        All rights reserved
                    </p>
                </div>
                <div className=" font-bold text-black hidden lg:flex ">
                    <button className=" hover:text-white  pr-4 underline underline-offset-2">
                        About Us
                    </button>
                    <button className=" hover:text-white  underline underline-offset-2">
                        Privacy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
