// src/components/Contact.jsx
import React from 'react';

function Contact({ id }) {
  return (
    <section id={id} className="min-h-screen py-16 flex items-center justify-center">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-100 mb-8 section-heading">Get In Touch</h2>
        <p className="text-lg text-gray-400 mb-8">
          I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <a 
          href="mailto:rewsirapop@gmail.com" 
          className="inline-block border border-teal-400 text-teal-400 px-8 py-4 rounded-md text-xl no-underline transition-colors hover:bg-teal-400 hover:bg-opacity-10"
        >
          Say Hello 
        </a>
      </div>
    </section>
  );
}

export default Contact;