// components/AddProduct.js
import React, { useState } from 'react';
import useAddProduct from '../hooks/useAddProduct';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const mutation = useAddProduct();

  const handleAddProduct = async () => {
    try {
      await mutation.mutateAsync({ name, price, image });
      setName('');
      setPrice('');
      setImage('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-4">Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleAddProduct}
        className="bg-blue-500 text-white py-2 px-4 rounded"
        disabled={mutation.isLoading || !name.trim() || !price.trim() || !image.trim()}
      >
        {mutation.isLoading ? 'Adding product...' : 'Add Product'}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Product added successfully!</p>}
    </div>
  );
};

export default AddProduct;
