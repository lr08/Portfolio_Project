"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Work", href: "/Work" },
  { name: "About", href: "/About" },
  { name: "Contact Us", href: "/ContactUs" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black py-6 px-8 flex items-center justify-between"
    >
      <Link href="/" className="flex items-center">
        <div className="border border-white px-5 py-2 rounded-full flex items-center space-x-2 relative">
          <span className="text-white text-xl font-semibold tracking-wide">
            Lakshay Rawal
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-12 text-lg">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white uppercase tracking-wider transition-all duration-300 hover:text-gray-400"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.div>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-full left-0 w-full bg-black p-6 md:hidden"
        >
          <ul className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white uppercase tracking-wider transition-all duration-300 hover:text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
