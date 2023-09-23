import React from 'react'
import paws from "@/assets/paws.png"


enum ProductEnum{
    name = "paws",
    description= "paws is a nice design",
    category ="pets",
    price = 344,
    image = "@/assets/paws.png"
}

interface Props{
    product: typeof ProductEnum
}

const Product = ({product}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex flex-col">
        <div className="md:flex-shrink-0">
          <img
            className="h-[100%] w-[100%] object-contain md:w-[100%]"
            src={paws}
            alt={ProductEnum.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {ProductEnum.category}
          </div>
          <p className="mt-2 text-gray-500">{ProductEnum.description}</p>
          <div className="mt-4">
            <span className="text-gray-900 font-semibold">${ProductEnum.price}</span>
            <span className="ml-2 text-sm text-gray-600">USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product