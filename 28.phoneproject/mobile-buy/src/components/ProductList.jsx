import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

const ProductList = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Error loading products: {error.message}</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((product) => (
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
