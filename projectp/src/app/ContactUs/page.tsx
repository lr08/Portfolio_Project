import React from 'react'

const ContactUS = () => {
  return (
    
      <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center p-6">
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 w-full text-center mb-8">
          <h1 className="text-4xl font-bold">Contact</h1>
        </header>
  
        <main className="w-full max-w-screen-md mx-auto space-y-12">
          <section className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-xl mb-4">
              <strong>Phone Numbers:</strong> <br />
              <a href="tel:+918383868987" className="text-blue-500 hover:underline">+91 83838 68987</a> <br />
              <a href="tel:+919891492790" className="text-blue-500 hover:underline">+91 98914 92790</a>
            </p>
            <p className="text-xl mb-4">
              <strong>Email:</strong> <br />
              <a href="mailto:lakshayrawal08@gmail.com" className="text-blue-500 hover:underline">lakshayrawal08@gmail.com</a>
            </p>
            <p className="text-xl mb-4">
              <strong>City:</strong> <br />
              Faridabad, Haryana
            </p>
          </section>
        </main>
      </div>
  
  )
}

export default ContactUS