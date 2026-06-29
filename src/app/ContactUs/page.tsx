"use client";
import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const ContactUs = () => {
  // Formik setup with validation
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message cannot be empty"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Your message has been sent!");
        resetForm();
      } else {
        alert("Failed to send the message. Try again later.");
      }
    },
  });

  return (
    <div className="bg-black text-white min-h-screen px-10 md:px-32 py-20">
      {/* Marquee Animation */}
      <div className="overflow-hidden whitespace-nowrap">
        <motion.h1
          className="text-[14vw] font-bold uppercase"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO!
        </motion.h1>
      </div>

      {/* Contact Info Section */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div>
          <h2 className="text-5xl font-bold">Get in Touch</h2>
          <p className="text-lg mt-4">
            Feel free to reach out via LinkedIn, GitHub, email, or phone. You
            can also use the given form .
          </p>

          <div className="mt-6 space-y-4">
            <p className="text-xl">
              📧 Email:{" "}
              <Link
                href="mailto:lakshay.rawall08@gmail.com"
                className="underline"
              >
                lakshay.rawall08@gmail.com
              </Link>
            </p>
            <p className="text-xl">📞 Phone: +91 8383868987</p>
            <p className="text-xl">
              🔗 LinkedIn:{" "}
              <Link
                href="https://linkedin.com/in/lakshay13"
                className="underline"
                target="_blank"
              >
                linkedin.com/in/lakshay13
              </Link>
            </p>
            <p className="text-xl">
              💻 GitHub:{" "}
              <Link
                href="https://github.com/lr08"
                className="underline"
                target="_blank"
              >
                github.com/lr08
              </Link>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg">
          <h3 className="text-3xl font-semibold mb-6">Send a Message</h3>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500">{formik.errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500">{formik.errors.message}</p>
            )}

            <button
              type="submit"
              className="w-full p-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
