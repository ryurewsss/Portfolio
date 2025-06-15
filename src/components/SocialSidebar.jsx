// src/components/SocialSidebar.jsx
import React from 'react';

function SocialSidebar() {
  return (
    <div className="hidden lg:flex fixed bottom-0 left-10 z-40 flex-col items-center text-gray-400">
      <ul className="list-none p-0 m-0 flex flex-col items-center">
        <li className="mb-5">
          <a href="https://github.com/ryurewsss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 text-3xl transition-colors">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="mb-5">
          <a href="https://linkedin.com/in/YourLinkedInProfile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 text-3xl transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        {/* Add more social icons as needed, e.g., Twitter, Instagram */}
      </ul>
      <div className="mt-5 w-[1px] h-24 bg-gray-400 relative">
        <a href="mailto:rewsirapop@gmail.com" className="absolute -left-10 bottom-36 rotate-90 origin-bottom-left text-gray-400 hover:text-teal-400 text-sm tracking-widest no-underline">
          rewsirapop@gmail.com
        </a>
      </div>
    </div>
  );
}

export default SocialSidebar;