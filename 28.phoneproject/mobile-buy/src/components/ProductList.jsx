// components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
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

const ProductList = () => {
  const { data, fetchNextPage, hasNextPage } = useProducts();

  if (!data) return null; // Handle initial loading state

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        Load More
      </button>
    </div>
  );
};

export default ProductList;
