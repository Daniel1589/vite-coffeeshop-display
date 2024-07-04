import React, { useState } from "react";
import productsData from "../data/products.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const products = productsData.products;
  const itemsPerPage = 4; // Number of items to display per page

  const nextProducts = () => {
    const newStartIndex = (startIndex + 1) % products.length;
    setStartIndex(newStartIndex);
  };

  const prevProducts = () => {
    const newStartIndex = (startIndex - 1 + products.length) % products.length;
    setStartIndex(newStartIndex);
  };

  return (
    <div className="flex items-center justify-center bg-[#fefbf1] relative">
      <div className="py-4  px-12   bg-[#fefbf1] rounded-lg overflow-hidden">
        <div className="flex w-[1750px] gap-[20px]">
          {[...products, ...products, ...products]
            .slice(startIndex, startIndex + itemsPerPage)
            .map((product, index) => (
              <div key={index} className="w-full">
                <div className="relative ">
                  <img
                    src={product.src}
                    alt={product.name}
                    className="w-full h-102 object-cover "
                  />
                  <div className="">
                    <div className="text-2xl">{product.name}</div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-2">{product.price}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="p-4 flex justify-between">
          <IoIosArrowBack
            className="absolute top-[250px] left-2 text-black size-6 hover:cursor-pointer"
            values="Previous"
            onClick={prevProducts}
          />

          <IoIosArrowForward
            className="absolute top-[250px] right-2 text-black size-6 hover:cursor-pointer"
            values="Previous"
            onClick={nextProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
