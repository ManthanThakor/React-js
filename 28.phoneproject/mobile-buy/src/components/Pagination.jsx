import React from 'react';

const Pagination = ({ page, setPage, hasMore }) => (
  <div className="flex justify-between mt-4">
    <button
      onClick={() => setPage(old => Math.max(old - 1, 1))}
      disabled={page === 1}
      className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
    >
      Previous
    </button>
    <button
      onClick={() => setPage(old => old + 1)}
      disabled={!hasMore}
      className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
    >
      Next
    </button>
  </div>
);

export default Pagination;
