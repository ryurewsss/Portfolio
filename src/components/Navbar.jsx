// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-between px-10 md:px-20 lg:px-36 shadow-lg">
      <div className="text-teal-400 text-3xl font-bold">
        <a href="#hero" className="hover:text-gray-100 transition-colors">Sirapo Koonsinchai</a>
      </div>
      <ul className="hidden md:flex space-x-8 lg:space-x-12 m-0 p-0 list-none">
        <li><a href="#about" className="text-gray-400 hover:text-teal-400 text-lg no-underline transition-colors">About</a></li>
        <li><a href="#experience" className="text-gray-400 hover:text-teal-400 text-lg no-underline transition-colors">Experience</a></li>
        <li><a href="#projects" className="text-gray-400 hover:text-teal-400 text-lg no-underline transition-colors">Projects</a></li>
        <li><a href="#contact" className="text-gray-400 hover:text-teal-400 text-lg no-underline transition-colors">Contact</a></li>
        <li>
          <a href="/Sirapop_Koonsinchai_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-teal-400 text-teal-400 px-4 py-2 rounded-md no-underline transition-colors hover:bg-teal-400 hover:bg-opacity-10">
            Resume
          </a>
        </li>
      </ul>
      {/* Mobile menu icon can be added here */}
    </nav>
  );
}

export default Navbar;