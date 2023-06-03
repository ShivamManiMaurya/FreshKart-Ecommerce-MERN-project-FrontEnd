import React from "react";
import logo from "../assets/images/logo/logo.png";

function Header() {
    return (
        <header className=" fixed shadow-md w-full h-[70px] bg-black px-4 md:px-16">
            <div>
                <div>
                    <img src={logo} alt="logo" className="h-[70px]" />
                </div>
            </div>
        </header>
    );
}

export default Header;
