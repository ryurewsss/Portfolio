// src/App.jsx
import React from 'react';
// No need to import index.css here, it's imported in main.jsx

// Import your components
import Navbar from './components/Navbar.jsx';
import SocialSidebar from './components/SocialSidebar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

// Hero Section (Simple for now, can be expanded)
const Hero = ({ id }) => (
  <section id={id} className="min-h-screen flex items-center justify-center px-4 md:px-0">
    <div className="max-w-3xl text-center md:text-left">
      <p className="text-teal-400 text-lg font-mono mb-4">Hi, my name is (Ryu)</p>
      <h1 className="text-gray-100 text-5xl md:text-7xl font-bold mb-4 inline-block">Sirapop Koonsinchai. </h1>
      <h2 className="text-gray-400 text-4xl md:text-6xl font-bold mb-6">I build things for the web.</h2>
      <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0">
        I'm a highly motivated Full Stack Developer with over 3 years of experience in designing and building scalable web applications. 
      </p>
      {/* Optional: Add a button to check out projects */}
      <a href="#projects" className="inline-block mt-8 border border-teal-400 text-teal-400 px-6 py-3 rounded-md text-lg no-underline transition-colors hover:bg-teal-400 hover:bg-opacity-10">
        Check out my projects!
      </a>
    </div>
  </section>
);


function App() {
  return (
    // Main app container
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      {/* <Navbar /> Fixed Navbar at the top */}
      {/* <SocialSidebar /> Fixed Social Sidebar on the left */}

      {/* Main content area - adjusts for Navbar height and centers content */}
      <main className="px-6 md:px-10 lg:px-10 flex justify-center"> {/* pt-20 to clear Navbar (80px height + some padding) */}
        {/* Two-Column Layout Container - this is the main split */}
        <div className="flex flex-col lg:flex-row w-full max-w-screen-xl relative"> {/* Adjust max-w-screen-xl as needed */}

          {/* Left Column - Fixed width, sticky with full viewport height */}
          <div className="lg:sticky lg:top-0 lg:max-h-[calc(100vh-80px)] lg:pt-20 lg:mb-20 flex-shrink-0 lg:overflow-y-auto flex flex-col justify-between">
            {/* Top part of left column (Name, Title, Profile) */}
            <div>
              <h2>
                <a href="#hero" className="text-teal-400 text-3xl md:text-4xl font-bold mb-4">Sirapop Koonsinchai</a>
              </h2>
              <h2>
                <a href="#hero" className="text-gray-400 text-xl md:text-4xl font-bold mb-4">Full Stack Developer</a>
              </h2>
            </div>

            {/* Navigation links in the left column */}
            <nav className="my-10 lg:my-0">
              <ul className="list-none p-0 m-0 space-y-4">
                <li><a href="#about" className="text-gray-400 hover:text-teal-400 text-xl md:text-2xl no-underline transition-colors block py-2 relative group">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-gray-400 transition-all duration-200 group-hover:w-8 group-hover:bg-teal-400"></span>
                  <span className="ml-8 group-hover:text-gray-100 transition-colors">About</span>
                </a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-teal-400 text-xl md:text-2xl no-underline transition-colors block py-2 relative group">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-gray-400 transition-all duration-200 group-hover:w-8 group-hover:bg-teal-400"></span>
                  <span className="ml-8 group-hover:text-gray-100 transition-colors">Experience</span>
                </a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-teal-400 text-xl md:text-2xl no-underline transition-colors block py-2 relative group">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-gray-400 transition-all duration-200 group-hover:w-8 group-hover:bg-teal-400"></span>
                  <span className="ml-8 group-hover:text-gray-100 transition-colors">Projects</span>
                </a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-teal-400 text-xl md:text-2xl no-underline transition-colors block py-2 relative group">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-gray-400 transition-all duration-200 group-hover:w-8 group-hover:bg-teal-400"></span>
                  <span className="ml-8 group-hover:text-gray-100 transition-colors">Contact</span>
                </a></li>
              </ul>
            </nav>

            {/* Social icons at the bottom of the left column (for larger screens, overlaps with SocialSidebar fixed) */}
            <div className="hidden lg:flex justify-start gap-6 text-gray-400 mt-10">
              <a href="https://github.com/ryurewsss" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-3xl transition-colors"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/rewsirapop/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-3xl transition-colors"><i className="fab fa-linkedin"></i></a>
              {/* Add more social icons here */}
            </div>
          </div>

          {/* Right Column - Main scrollable content area */}
          <div className="lg:flex-grow p-6 md:p-8">
            <Hero id="hero" />
            <About id="about" />
            <Experience id="experience" />
            <Projects id="projects" />
            <Contact id="contact" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;