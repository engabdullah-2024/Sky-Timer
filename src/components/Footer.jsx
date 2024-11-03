// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-4 bg-blue-600 bg-opacity-80 text-white w-full"> {/* Added w-full for full width */}
      <div className="flex space-x-4 mb-2"> {/* Added mb-2 for spacing between icons and text */}
        <a href="https://github.com/engabdullah-2024" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-300 transition duration-300" />
        </a>
        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl hover:text-gray-300 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-gray-300 transition duration-300" />
        </a>
      </div>
      <p className="text-sm">All rights reserved by Eng Abdalla.</p> {/* Added copyright message */}
    </footer>
  );
};

export default Footer;
