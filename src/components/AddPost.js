// myblog-frontend/src/components/AddPost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const AddPost = () => {
  const navigate = useNavigate();

  // State for form fields and errors
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the corresponding error when the user starts typing
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    let isValid = true;

    if (formData.title.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        title: 'Title is required.',
      }));
      isValid = false;
    }

    if (formData.content.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        content: 'Content is required.',
      }));
      isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
      try {
        // Perform the API call to add a new post
        const response = await fetch('http://localhost:8000/api/posts/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to add post.');
        }

        // Redirect to the post list after successful submission
        navigate('/');
      } catch (error) {
        console.error('Error adding post:', error);
        // Handle error (e.g., show an error message to the user)
      }
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <span className="error-message">{formErrors.title}</span>
        </div>

        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          ></textarea>
          <span className="error-message">{formErrors.content}</span>
        </div>

        <div className="button-container">
          <button type="submit" className="button-link">Submit</button>
          <button type="button" className="button-link" onClick={() => navigate('/')}>Back to Posts</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
