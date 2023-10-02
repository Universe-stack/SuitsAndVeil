import React, { useState } from 'react';

interface Item {
  item: string;
  name: string;
  quantity: number;
  price: number;
}

const ItemTable: React.FC = (props) => {
  const [hoveredTdIndex, setHoveredTdIndex] = useState<number | null>(null);

  const paws = props.paws;
  const [items] = useState<Item[]>([
    { item: 'Item 1', name: 'Product A', quantity: 2, price: 10.0, img: paws },
    { item: 'Item 2', name: 'Product B', quantity: 3, price: 15.0, img: paws },
    { item: 'Item 3', name: 'Product C', quantity: 1, price: 5.0, img: paws },
  ]);

  return (
    <div className="container">
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-4">Item</th>
            <th className="px-4 py-4">Name</th>
            <th className="px-4 py-4">Quantity</th>
            <th className="px-4 py-4">Price</th>
            <th className="px-4 py-4">Total</th>
          </tr>
        </thead>
        <tbody className='text-left'>
          {items.map((item, index) => (
            <tr key={index} className="border-b"  onMouseEnter={() => setHoveredTdIndex(index)}
            onMouseLeave={() => setHoveredTdIndex(null)}>
              <td className="px-4 py-4">
                <div className='w-[2rem] h-[2rem] object-contain mb-2'><img src={item.img} alt='' width={100} height={100} /></div>
              </td>
              <td className="px-4 py-4">{item.name}</td>
              <td className="px-4 py-4">{item.quantity}</td>
              <td className="px-4 py-4">${item.price.toFixed(2)}</td>
              <td className="px-4 py-4">${(item.quantity * item.price).toFixed(2)}</td>
              <td
                className={`px-0 py-4 ${hoveredTdIndex === index ? '' : 'hidden'}`}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
