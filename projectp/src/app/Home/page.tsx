import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
 <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
        <h1 className="text-4xl font-bold">Professional Portfolio</h1>
        <p className="mt-2">Showcasing Skills, Experience, and Projects</p>
      </header>

      <main className="p-6 space-y-12">
      <section className="bg-white shadow-md p-6 rounded-lg transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-semibold">Objective</h2>
          <p className="mt-4">
            Technology & innovation driven professional with capabilities in executing prestigious projects within strict time schedule; targeting to express potential in Full-stack and Front-end Development with an esteemed organization; preferably in Delhi/NCR and Bangalore.
          </p>
        </section>

        <section className="bg-white shadow-md p-6 rounded-lg transition-transform duration-500 hover:scale-105">
  <h2 className="text-3xl font-semibold">Profile Summary</h2>
  <ul className="mt-4 list-disc list-inside space-y-2">
            <li>More than 2 years of experience in the IT industry, specializing in Java J2EE, Spring Framework, and Microservices.</li>
            <li>Thriving in the role of a Full Stack Developer at Wipro, managing front-end and back-end components using a diverse range of technologies like React, Angular, Java, and Spring Boot, ensuring smooth technology integration.</li>
            <li>Proficient in designing user interfaces, developing robust back-end systems, and ensuring seamless integration of technologies.</li>
            <li>Progressing effectively with the Next.js Framework for a novel sales application, employing Material UI and Node.js for the enhancement of backend functionalities.</li>
            <li>Guiding the development team to reach project milestones and deliver results effectively.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md p-6 rounded-lg transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-semibold">Work Experience</h2>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold">Project Engineer | Wipro | Bangalore | Apr’22-Present</h3>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li>Leading as a Full Stack Developer, ensuring seamless integration of front-end and back-end components.</li>
              <li>Collaborating cross-functionally to deliver comprehensive solutions and meet project requirements.</li>
              <li>Utilizing React, Angular, Java, Spring Boot, SQL, and MongoDB for software development.</li>
              <li>Designing user interfaces and developing robust back-end systems to enhance project functionality.</li>
              <li>Implementing Next.js Framework for a new sales application, incorporating Material UI and Node.js for backend development.</li>
              <li>Conducting thorough testing using Storybook to ensure component quality and functionality.</li>
              <li>Guiding the development team to achieve project milestones and deliverables.</li>
              <li>Providing technical guidance and support to enhance overall project efficiency.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white shadow-md p-6 rounded-lg transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-semibold">Academic Details</h2>
          <p className="mt-4">
            Bachelor of Technology in Electronics and Communication, UIET, Kurukshetra University, Haryana in 2021
          </p>
        </section>
      </main>
    </div>
  )
}

export default Home