import React from "react";

const Category = async () => {
  const res = await fetch(`https://dummyjson.com/products/categories`);
  const data = await res.json();

  return (
    <div className="max-w-[280px] w-full p-4 bg-[#FBFBFB] rounded-lg shadow-sm">
    <h1 className="text-[18px] font-bold mb-3 text-[#3D3D3D]">Categories</h1>
    <div className="text-[#3D3D3D] flex flex-col gap-2">
      {data?.map(({ name, slug }) => (
        <div
          key={slug}
          className="px-2 py-1 rounded-md cursor-pointer transition duration-300 
            hover:text-[#46A358] hover:font-bold 
            active:text-[#46A358] active:font-semibold 
            text-left"
        >
          <p>{name}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Category;
