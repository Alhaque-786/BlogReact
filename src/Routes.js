// myblog-frontend/src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import

import PostList from './components/PostList';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/add" element={<AddPost />} />
      <Route path="edit/:id" element={<EditPost />} />
    </Routes>
  );
};

const RoutesComponent = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default RoutesComponent;
