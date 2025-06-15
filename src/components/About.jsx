// src/components/About.jsx
import React from 'react';
// import profilePic from '../assets/your-profile-pic.jpg'; // If you have a profile picture

function About({ id }) {
  return (
    <section id={id} className="min-h-screen py-16 flex items-center">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-2/3">
          <h2 className="text-4xl font-bold text-gray-100 mb-8 section-heading">About Me</h2>
          <p className="mb-4 text-lg text-gray-400">
            Highly motivated Full Stack Developer with over 3 years of experience in designing and building scalable web applications. 
          </p>
          <p className="mb-4 text-lg text-gray-400">
            Passionate about continuous learning, new technologies, and delivering high-quality, problem-solving solutions. 
          </p>
          <p className="text-lg text-gray-400">
            I've gained hands-on experience with technologies like <span className="text-teal-400">HTML, CSS, JavaScript/TypeScript, PHP, SQL</span>  and frameworks such as <span className="text-teal-400">Node.js, Express.js, Vue.js, Tailwind</span>. My work also involved databases like <span className="text-teal-400">MySQL, OracleDB</span>  and cloud services like <span className="text-teal-400">AWS (S3)</span>.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center items-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-teal-400">
            {/* Replace with your actual profile picture path */}
            <img src="/src/assets/ryu.jpg" alt="Sirapop Koonsinchai" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;