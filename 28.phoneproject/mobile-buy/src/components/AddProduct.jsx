// components/AddProduct.js
import React, { useState } from 'react';
import useAddProduct from '../hooks/useAddProduct';

const AddProduct = () => {
  const mutation = useAddProduct();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAddProduct = async () => {
    try {
      await mutation.mutateAsync({ name, price, image }); // Use mutateAsync to await the mutation
      // Clear form fields after successful addition
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
      >
        Add Product
      </button>
      {mutation.isLoading && <p>Adding product...</p>}
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Product added successfully!</p>}
    </div>
  );
};

export default AddProduct;
