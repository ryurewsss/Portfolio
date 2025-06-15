// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-10 px-5 text-gray-400 text-sm">
      <p>Designed & Built by Sirapop Koonsinchai</p>
      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}

export default Footer;