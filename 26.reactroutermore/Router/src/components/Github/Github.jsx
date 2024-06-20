import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProfile = async (username) => {
  const response = await axios.get(`https://api.github.com/users/ManthanThakor`);
  return response.data;
};

const GitHubProfile = ({ username }) => {
  const { data: profile, error, isLoading } = useQuery(['githubProfile', username], () => fetchProfile(username), {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching GitHub profile: {error.message}</div>;
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-5">
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-white font-semibold text-lg">{profile.name}</h1>
      </div>
      <img className="w-full h-56 object-cover object-center" src={profile.avatar_url} alt={profile.name} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">{profile.login}</h2>
        <p className="py-2 text-gray-700">{profile.bio}</p>
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10 10-4.485 10-10S17.515 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM11 11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"/>
          </svg>
          <h1 className="px-2 text-sm">{profile.location || 'Location not available'}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M20 0H4C1.791 0 0 1.791 0 4v16c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4V4C24 1.791 22.209 0 20 0zM9 19H6v-8h3v8zM7.5 9.857C6.119 9.857 5 8.738 5 7.357S6.119 4.857 7.5 4.857 10 5.976 10 7.357 8.881 9.857 7.5 9.857zM20 19h-3v-4c0-2.209-4-2.046-4 0v4h-3v-8h3v1.6c1.396-2.586 7-2.777 7 2.4V19z"/>
          </svg>
          <h1 className="px-2 text-sm">{profile.company || 'Company not available'}</h1>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
