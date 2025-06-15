// src/components/Experience.jsx
import React, { useState } from 'react';

function Experience({ id }) {
  const [activeTab, setActiveTab] = useState(0); // Default to the first experience

  const experiences = [
    {
      company: "Freelance",
      title: "Full Stack Developer",
      duration: "May 2024 - Mar 2025",
      website:'',
      responsibilities: [
        "Developed a data collection and statistics system that allows users to store, manage, and analyze structured data for reporting purposes, improving report generation efficiency by 25%. ",
        "Built a language translation tool that extracts text from images using OCR (Optical Character Recognition) and translates it into multiple languages, reducing manual translation time by 50%. ",
        "Implemented front-end interfaces with Vue.js and Tailwind CSS to provide a smooth user experience. "
      ]
    },
    {
      company: "Nippon Sysits",
      title: "Full Stack Developer",
      duration: "June 2022 - Mar 2024",
      website:'https://www.ns.co.th/',
      responsibilities: [
        "Developed a digital blood donation registration system from scratch. ",
        "Concurrently, led a team of 3 developers on the project, consistently delivering on time with high-quality code. ",
        "Designed system architecture and implemented comprehensive backend APIs and frontend UX/UI. ",
        "Implemented a scalable microservices architecture, facilitating easier maintenance and accelerating feature deployment. ",
        "Integrated RabbitMQ for asynchronous data processing and MQTT for services communication, enhancing system performance by 25%. ",
        "Developed and applied Deep Learning models using TensorFlow for handwritten citizen ID card number recognition, achieving up to 95% recognition accuracy. ",
        "Implemented browser-side data caching, reducing database retrieval time by 80% and significantly improving page load speed. ",
        "Managed seamless system deployment using Docker across staging and production environments. "
      ]
    },
    {
      company: "Clicknext",
      title: "Intern Full Stack Developer",
      duration: "June 2021 - Jan 2022",
      website:'https://www.clicknext.com/',
      responsibilities: [
        "Improved MakeWebEasy website functionality and redesigned responsive homepage for UX/UI. ",
        "Refactored frontend codebase for maintainability and performance. ",
        "Aligned features to better suit user behaviors and design trends. "
      ]
    },
    
  ];

  return (
    <section id={id} className="min-h-screen py-16 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-gray-100 mb-8 section-heading">Where I’ve Worked</h2>

        <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-xl overflow-hidden min-h-[400px]">
          {/* Left Side: Company Tabs (sticky on larger screens) */}
          <div className="md:w-1/4 flex-shrink-0 bg-gray-800 border-r border-gray-700 md:border-r-0 md:border-b-0 border-b overflow-x-auto md:overflow-y-auto">
            <ul className="flex md:flex-col list-none p-0 m-0">
              {experiences.map((exp, index) => (
                <li
                  key={index}
                  className={`flex-shrink-0 md:flex-shrink-1 px-4 py-3 cursor-pointer text-gray-400 hover:bg-gray-900 hover:text-teal-400 transition-all duration-200
                    ${activeTab === index ? 'text-teal-400 bg-gray-900 border-b-2 md:border-b-0 md:border-l-2 border-teal-400' : 'border-b-2 md:border-b-0 md:border-l-2 border-transparent'}`}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Experience Details (scrollable content) */}
          <div className="md:flex-1 p-6 md:p-8 overflow-y-auto">
            {experiences[activeTab] && (
              <div className="details-content">
                <h3 className="flex items-center text-2xl font-bold text-gray-100 mb-2">
                  {experiences[activeTab].title}{" "}&nbsp;
                  <span className="text-teal-400">@{experiences[activeTab].company}</span>
                  {/* ส่วนของ Website ที่จะแสดงหรือไม่แสดง และอยู่ฝั่งขวาสุด */}
                  {experiences[activeTab].website && ( // เงื่อนไข: จะแสดงก็ต่อเมื่อมีค่า website
                    <span className="ml-auto"> {/* ml-auto จะดันองค์ประกอบนี้ไปขวาสุด */}
                      <a
                        href={experiences[activeTab].website}
                        target="_blank" // เปิดในแท็บใหม่
                        rel="noopener noreferrer" // เพิ่มความปลอดภัย
                        className="text-sm text-teal-400 bg-gray-900 px-3 py-1 rounded-full hover:underline" // ทำให้ดูเป็นลิงก์
                      >
                        Website 
                        <i className="fas fa-external-link-alt ml-1"></i>
                      </a>
                    </span>
                  )}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{experiences[activeTab].duration}</p>
                <ul className="list-none p-0 m-0 space-y-2">
                  {experiences[activeTab].responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="relative pl-6 text-lg text-gray-400">
                      <span className="absolute left-0 text-teal-400">▹</span> {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;