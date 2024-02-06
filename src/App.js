// myblog-frontend/src/App.js
import React from 'react';
import Routes from './Routes';
import './styles.css';  // Update the import path

function App() {
  return (
    <div className="container">
      <h1>My Blog</h1>
      <Routes />
    </div>
  );
}

export default App;
