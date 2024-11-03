// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Timer from './components/Timer';


function App() {
  const [theme, setTheme] = useState('day');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'day' ? 'night' : 'day'));
  };

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col items-center justify-between ${
          theme === 'day' ? 'bg-blue-400' : 'bg-gray-800'
        } transition-colors duration-500`}
      >
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <nav className="p-4">
          <Link to="/" className="mr-4 text-white">Home</Link>
         
        </nav>

        <main className="flex-grow flex items-center justify-center p-4">
          <Routes>
            <Route path="/" element={<Timer />} />
           
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
