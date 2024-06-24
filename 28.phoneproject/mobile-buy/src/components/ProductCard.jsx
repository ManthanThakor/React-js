import React from 'react';

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
    <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
    <p className="text-gray-800">${product.price}</p>
  </div>
);

export default ProductCard;
