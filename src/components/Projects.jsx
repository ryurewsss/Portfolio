// src/components/Projects.jsx
import React from 'react';

// You would typically have an array of project objects here
// For now, let's use some placeholder data based on your resume
const projects = [
  {
    title: "Digital Blood Donation System",
    description: "Developed a digital blood donation registration system from scratch. Concurrently, led a team of 3 developers on the project, consistently delivering on time with high-quality code. Designed system architecture and implemented comprehensive backend APIs and frontend UX/UI. Implemented a scalable microservices architecture, facilitating easier maintenance and accelerating feature deployment. Integrated RabbitMQ for asynchronous data processing and MQTT for services communication, enhancing system performance by 25%. Implemented browser-side data caching, reducing database retrieval time by 80% and significantly improving page load speed. Managed seamless system deployment using Docker across staging and production environments.",
    techStack: ["Node.js", "Express.js","Vue.js", "Tailwind CSS", "MySQL", "Docker", "Microservices", "MQTT", "RabbitMQ", "TensorFlow", "OCR", "Node-RED"],
    link: "" // Replace with actual project link
  },
  {
    title: "Stock Trading Order Management System",
    description: "Developed a comprehensive system for managing stock trading orders, enabling users to securely deposit and manage their investment portfolios within the platform. Implemented robust functionalities for creating and executing various buy/sell order types, ensuring efficient and reliable transaction processing. Designed intuitive interfaces to streamline user workflows from portfolio submission to order placement and monitoring.",
    techStack: ["Node.js", "Express.js","Vue.js", "Tailwind CSS", "MySQL", "Docker", "MQTT", "RabbitMQ"],
    link: ""
  },
  {
    title: "Data Collection & Statistics System",
    description: "Developed a data collection and statistics system that allows users to store, manage, and analyze structured data for reporting purposes, improving report generation efficiency by 25%.",
    techStack: ["Node.js", "Express.js","Vue.js", "Tailwind CSS", "MySQL", "Docker"],
    link: ""
  },
  {
    title: "Language Translation Tool (OCR)",
    description: "Built a language translation tool that extracts text from images using OCR (Optical Character Recognition) and translates it into multiple languages, reducing manual translation time by 50%. Implemented front-end interfaces with Vue.js and Tailwind CSS to provide a smooth user experience.",
    techStack: ["OCR", "Vue.js", "Tailwind CSS"],
    link: ""
  },
  {
    title: "MakeWebEasy Website Improvement",
    description: "Improved MakeWebEasy website functionality and redesigned responsive homepage for UX/UI. Refactored frontend codebase for maintainability and performance. Aligned features to better suit user behaviors and design trends.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "AJAX", "PHP"],
    link: "https://www.makewebeasy.com/th"
  },
  {
    title: "E-commerce Platform Template (Node.js, Vue.js, MySQL)",
    description: "Developed a reusable boilerplate system designed as a foundational template for e-commerce applications. The architecture was built with a focus on **neutrality and modularity**, ensuring core functionalities could be easily adapted and extended for various business needs. Key modules include a robust product catalog, efficient order management, intuitive campaign management tools, and comprehensive reporting features.",
    techStack: ["Node.js", "Express.js","Vue.js", "Tailwind CSS", "MySQL"],
    link: "https://github.com/ryurewsss/Nodejs-Template"
  },
  {
    title: "RMAP: Custom Map with Leaflet.js",
    description: "Developed RMAP, a mini-project demonstrating interactive map functionalities using the Leaflet.js library. This project allows for the dynamic management and display of custom icons at specific geographic coordinates, enhancing spatial data visualization. It serves as a foundational example for integrating custom markers and interactive map features into web applications.",
    techStack: ["JavaScript", "HTML", "CSS","PHP(CI3)", "Leaflet.js"],
    link: "https://github.com/ryurewsss/RMAP"
  }
];

function Projects({ id }) {
  return (
    <section id={id} className="min-h-screen py-16 flex flex-col items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-gray-100 mb-8 section-heading">Some Things I’ve Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-100 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-teal-400">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-900 px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              {project.link && (
                <div className="mt-4 text-right">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-gray-100 transition-colors">
                    View Project <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;