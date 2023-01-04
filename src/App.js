import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BillGenerator from './BillGenerator';
import Bill from './Bill';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BillGenerator />} />
        <Route path="/bill" element={<Bill />} />
      </Routes>
    </Router>
  );
}

export default App;