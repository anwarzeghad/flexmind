import React from "react";

const Nav = () => {
    return (
        <div className="flex items-center justify-between m-10 px-10 py-4 rounded-full bg-white/80 shadow-md backdrop-blur-sm">
            <img src="/logo.svg" alt="logo" className="h-14 w-auto" />
            <ul className="flex gap-10 text-[#231f20] font-medium text-xl">
                <li className=" hover:text-[#12a387]"><a href=".">Home</a></li>
                <li className=" hover:text-[#12a387]"><a href=".">About</a></li>
                <li className=" hover:text-[#12a387]"><a href=".">Services</a></li>
                <li className=" hover:text-[#12a387]"><a href=".">Contact</a></li>
            </ul>
            <button className="bg-gradient-to-r from-[#115f5c] to-[#12a387] px-6 py-2 rounded-br-3xl rounded-tl-3xl text-white text-lg shadow-md hover:scale-105 transition">
                Get Started
            </button>
        </div>
    );
}

export default Nav;
