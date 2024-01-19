import React, { useState } from "react";
import {
  IoMdMenu,
  IoMdSearch,
  IoIosArrowDown,
  IoMdClose,
} from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between items-center p-4 ">
      {/* Left side*/}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer lg:hidden">
          <IoMdMenu size={30} />
        </div>
        {/* Logo */}
        <h1 className="text-[1.5rem] sm:text-3xl lg:text-3xl px-2 font-bold">
          SHOP.CO
        </h1>
      </div>

      {/* nav link */}
      <div className="hidden lg:flex ">
        <ul className="flex  items-center space-x-6 ">
          <li className=" flex flex-row  items-center ">
            <span className=" ">Shop</span>
            <IoIosArrowDown />
          </li>
          <li className="">On Sale</li>
          <li className="">New Arrivals</li>
          <li className="">Brands</li>
        </ul>
      </div>

      {/* right side */}
      <div className="flex justify-center items-center  ">
        {/* search */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[50px] sm:w-[350px]  lg:w-[400px]  mr-3 ">
          <IoMdSearch size={30} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search foods"
          />
        </div>

        {/* cart */}
        <div className="mr-2">
          <IoCartOutline size={25} />
        </div>

        {/* profile */}
        <div>
          <CgProfile size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="fixed bg-black/80 w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white  z-10 duration-300 "
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300  "
        }
      >
        <IoMdClose
          onClick={() => setNav(!nav)}
          className="absolute right-4 top-4 cursor-pointer"
          size={30}
        />
        <h2 className="text-2xl p-4">SHOP-CO</h2>
        <nav>
          <ul className=" flex flex-col p-4 text-gray-800">
            <li className=" flex flex-row text-xl py-4  items-center ">
              <span className=" ">Shop</span>
              <IoIosArrowDown />
            </li>
            <li className="text-xl py-4 flex">On Sale</li>
            <li className="text-xl py-4 flex">New Arrivals</li>
            <li className="text-xl py-4 flex">Brands</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
