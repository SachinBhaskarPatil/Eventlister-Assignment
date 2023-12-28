// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventListing from './components/EventListing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventListing />} />
      </Routes>
    </Router>
  );
}

export default App;
