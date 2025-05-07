"use client"
import React from "react";
import { Slider } from "antd";

const PriceRange = () => {
  const [value, setValue] = React.useState([0, 1000]);

  return (
    <div className="max-w-[280px] w-full">
      <Slider
        range
        min={0}
        max={1000}
        value={value}
        onChange={setValue}
        className="w-full"
      />
      <p className="text-[15px] text-[#3D3D3D] mt-[15px]">
        Price:{" "}
        <span className="text-[#46A358] font-bold">
          ${value[0]} - ${value[1]}
        </span>{" "}
      </p>
      <button className="h-[35px] w-[90px] rounded-[6px] text-white text-[14px] font-bold mt-[15px]  bg-[#46A358] hover:bg-green-700 duration-300">
        Filter
      </button>
    </div>
  );
};

export default PriceRange;
