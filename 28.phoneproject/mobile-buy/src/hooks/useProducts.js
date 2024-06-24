import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProducts = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${pageParam}`);
  return data;
};

const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage, pages) => lastPage.length > 0 ? lastPage[lastPage.length - 1].id : false,
  });
};

export default useProducts;
