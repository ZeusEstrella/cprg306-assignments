import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-100 rounded p-2 my-2">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-gray-500">Category: {category}</div>
      <div className="text-sm text-gray-500">Quantity: {quantity}</div>
    </li>
  );
};

export default Item;

