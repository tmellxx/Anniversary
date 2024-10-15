// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Snapstreak from './pages/Snapstreak';
import Reasons from './pages/Reasons';
import Present from './pages/Present';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/snapstreak" element={<Snapstreak />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/present" element={<Present />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
