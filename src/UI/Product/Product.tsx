import React from 'react';

interface Product {
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

type Props = {
  product: Product;
};

const ProductComponent: React.FC<Props> = ({ product }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex flex-col">
        <div className="md:flex-shrink-0">
          <img
            className="h-[100%] w-[100%] object-contain md:w-[100%]"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {product.category}
          </div>
          <p className="mt-2 text-gray-500">{product.description}</p>
          <div className="mt-4">
            <span className="text-gray-900 font-semibold">${product.price}</span>
            <span className="ml-2 text-sm text-gray-600">USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
