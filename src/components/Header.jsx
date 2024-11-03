// src/components/Header.jsx
import React from 'react';
import { FaSun, FaMoon, FaRegClock } from 'react-icons/fa'; // Importing the timer icon
import { motion } from 'framer-motion';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 bg-opacity-80 w-full"> {/* Added w-full for full width */}
      <div className="flex items-center">
        <FaRegClock className="text-white text-2xl mr-2" /> {/* Timer icon */}
        <motion.h1
          className="text-3xl font-bold text-white mr-8" // Removed comment from here to prevent syntax error
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          SkyTimer
        </motion.h1>
      </div>
      <button onClick={toggleTheme} className="text-white text-xl focus:outline-none">
        {theme === 'day' ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
};

export default Header;
