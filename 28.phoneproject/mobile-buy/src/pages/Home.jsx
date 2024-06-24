import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

const fetchProducts = async (page) => {
  const { data } = await axios.get(`https://api.example.com/products?page=${page}`);
  return data;
};

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useQuery(['products', page], () => fetchProducts(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} hasMore={data.hasMore} />
    </div>
  );
};

export default Home;
