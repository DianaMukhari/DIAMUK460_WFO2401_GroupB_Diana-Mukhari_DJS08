// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Vans from './Vans/Vans';
import VanDetail from './Vans/VanDetail';
import Dashboard from './pages/Dashboard';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer>&#169; VanLife</footer>
      </div>
    </Router>
  );
}

export default App;