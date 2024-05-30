import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container">
      {posts.map(post => (
        <div className="card" key={post.id}>
          <div className="card-img">
            <img src={`https://via.placeholder.com/300?text=Post+${post.id}`} alt={`Post ${post.id}`} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;



