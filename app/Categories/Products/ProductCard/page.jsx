import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const ProductCard = async () => {
  const res = await fetch(`https://dummyjson.com/products/category/beauty`);
  const data = await res.json();
  console.log(data);

  return (
    <div className="">
      <div className="flex gap-[30px] flex-wrap">
        {data?.products?.map(({ brand, images, price }) => (
          <div className="relative group">
            <div className="content-center h-[280px] w-[250px] bg-[#FBFBFB] rounded-[5px]">
              <img
                src={images[0]}
                alt={brand}
                className="w-full h-[200px] rounded-md mb-4"
              />
            </div>
            <h2 className="text-[16px] text-[#3d3d3d] font-bold mt-[12px]">
              {brand}
            </h2>
            <p className="text-[18px] text-[#46A358] font-bold mt-[6px]">
              {price}
            </p>
            <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 scale-0  group-hover:scale-110 flex  gap-x-3  transition-all duration-300">
              <AiOutlineShoppingCart
                //   onClick={() => addToCard(item)}
                className="p-1.5 h-[30px] w-[30px] rounded-[5px] bg-white cursor-pointer hover:text-gray-700"
              />
              <FaRegHeart className="p-1.5 h-[30px] w-[30px] rounded-[5px] bg-white cursor-pointer hover:text-gray-700" />
              <IoMdSearch className="p-1.5 h-[30px] w-[30px] rounded-[5px] bg-white cursor-pointer hover:text-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
