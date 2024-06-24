import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUser = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  return data;
};

const User = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    cacheTime: 1000 * 60 * 5, // 5 minutes

  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || 'An error occurred'}</div>;

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
    </div>
  );
};

export default User;
