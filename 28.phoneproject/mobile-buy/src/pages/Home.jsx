import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductList from '../components/ProductList';
import AddProduct from '../components/AddProduct';

const Home = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <AddProduct />
      <ProductList data={data} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
    </div>
  );
};

export default Home;
