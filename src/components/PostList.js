// myblog-frontend/src/components/PostList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/posts/');
        if (!response.ok) {
          throw new Error('Failed to fetch posts.');
        }

        const postData = await response.json();
        setPosts(postData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Post List</h2>
      <Link to="/add" className="add-blog-button">Add Blog</Link>
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Created on: {new Date(post.pub_date).toLocaleString()}</p>
          <Link to={`/edit/${post.id}`} className="button-link">Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
