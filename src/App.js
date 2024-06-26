import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePanel from './page/Home';
import About from './page/About';
import Contact from './page/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePanel />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 