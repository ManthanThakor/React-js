// hooks/useAddProduct.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const addProduct = async (newProduct) => {
  // Simulate a successful response with a fake product ID
  return { id: Date.now(), ...newProduct }; // Example response structure
};

const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      // Invalidate and refetch the 'products' query to update the list with the new product
      queryClient.invalidateQueries('products');
      // Optionally, you can also perform any additional actions after a successful mutation
    },
  });
};

export default useAddProduct;
