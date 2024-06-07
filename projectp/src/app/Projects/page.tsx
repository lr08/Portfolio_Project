import React from 'react'
import { projects, certifications } from '../Projects/data';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 w-full text-center mb-8">
      <h1 className="text-4xl font-bold">Projects & Certifications</h1>
    </header>

    <main className="max-w-screen-xl mx-auto space-y-12">
      <section className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
          <div
          key={index}
          className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-600">Technology used: {project.technology}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
        <div className="space-y-4">
          {certifications.map((certification, index) => (
           <div
           key={index}
           className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
         >
              <h3 className="text-xl font-bold">{certification.name}</h3>
              <p className="text-gray-600">Provider: {certification.provider}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  </div>
  )
}

export default Projects