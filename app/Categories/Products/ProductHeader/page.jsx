"use client"
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const ProductHeader = ({ setSearchQuery }) => {
  // qidiruv matnini saqlash
  const [query, setQuery] = useState("");

  // inputdagi o'zgarishni kuzatish
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);  // parent komponentga yuborish
  };

  return (
    <div>
      <form action="" className="flex mb-10">
        <input
          type="text"
          placeholder="Search by Title"
          className="w-full px-2 h-[40px] rounded-[10px] outline-none border border-gray-200"
          value={query}
          onChange={handleSearchChange}
        />
        <IoIosSearch className="ml-2 text-gray-600" />
      </form>
    </div>
  );
};

export default ProductHeader;
