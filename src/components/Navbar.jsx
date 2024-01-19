import React from "react";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between items-center p-4 ">
      {/* Left side*/}
      <div>
        {/* Logo */}
        <h1 className="text-2x1 sm:text-3xl lg:text-3xl px-2 font-bold">
          SHOP.CO
        </h1>
      </div>

      {/* nav link */}
      <div>
        <ul className="flex  align-center ">
          <li className="mr-4 px-3   flex flex-row  ">
            <span className="mr-2">Shop</span>
            <IoIosArrowDown />
          </li>
          <li className="mr-4 px-3 ">On Sale</li>
          <li className="mr-4 px-3 ">New Arrivals</li>
          <li className="mr-4 px-3 ">Brands</li>
        </ul>
      </div>

      {/* search */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[400px] ">
        <IoMdSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none "
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* right side */}
      <div className="flex justify-center  ">
        <div className="mr-2">
          <IoCartOutline size={25} />
        </div>
        <div>
          <CgProfile size={25} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
