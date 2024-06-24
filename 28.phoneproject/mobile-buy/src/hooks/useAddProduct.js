import { useMutation, useQueryClient } from '@tanstack/react-query';

// Mock function for adding a product (replace with actual API call in production)
const addProduct = async (newProduct) => {
  return { id: Date.now(), ...newProduct }; // Example response structure
};

const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};

export default useAddProduct;
