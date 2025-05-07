import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b-1 border-b-[#46A35880] max-w-[1200px] mx-auto px-[15px] min-h-[80px] ">
        <img src="/image/logo.png" alt="logoImg" />
        <ul className="flex gap-x-[30px] text-[16px] text-[#3D3D3D] font-medium">
          <li className="relative group">
            <Link href="/header" className="hover:font-bold hover:text-[#46A358] duration-300">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#46A358] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/blog" className="hover:font-bold hover:text-[#46A358] duration-300">
              Blog
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#46A358] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-x-[20px]">
          <IoIosSearch className="text-[25px] text-[#3D3D3D] hover:text-[#46A358] duration-300 cursor-pointer" />
          <MdOutlineShoppingCart className="text-[25px] text-[#3D3D3D] hover:text-[#46A358] duration-300 cursor-pointer"/>
          <button className="flex items-center justify-center gap-x-1 text-white rounded-[6px] h-[35px] w-[100px] bg-[#46A358] text-[16px] cursor-pointer hover:bg-green-700 duration-300">
            <LuLogIn />
            <p>Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
