"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-auto">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://uploads-ssl.webflow.com/65b7bac85c1092089d510616/65b8c737f3618d8dd99da139_VIDEO HOME (DSK)-transcode.mp4" type="video/mp4" />
        <source src="https://uploads-ssl.webflow.com/65b7bac85c1092089d510616/65b8c737f3618d8dd99da139_VIDEO HOME (DSK)-transcode.webm" type="video/webm" />
      </video>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Hero Text Content */}
      <div className="relative z-10 text-white w-full px-12 md:px-20 pt-[8rem] md:pt-[6rem] pb-20">
        {/* First Line - Left Aligned */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[8vw] md:text-[10vw] font-bold uppercase leading-none tracking-wide font-sans text-left w-full mt-6"
          style={{ fontFamily: "Calibri, sans-serif" }}
        >
          <span className="italic font-light normal-case text-[4vw] md:text-[5vw]">I&apos;m a</span> FULL-STACK
        </motion.h1>

        {/* Second Line - Right Aligned */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[8vw] md:text-[10vw] font-bold uppercase leading-none tracking-wide font-sans text-right w-full mt-6"
          style={{ fontFamily: "Calibri, sans-serif" }}
        >
          DEVELOPER 
          <span className="italic font-light normal-case text-[4vw] md:text-[5vw]"> &</span>
        </motion.h2>

        {/* Third Line - Left Aligned */}
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[8vw] md:text-[10vw] font-bold uppercase leading-none tracking-wide font-sans text-left w-full mt-6"
          style={{ fontFamily: "Calibri, sans-serif" }}
        >
          SOFTWARE
        </motion.h3>

        {/* Fourth Line - Right Aligned */}
        <motion.h4
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-[8vw] md:text-[10vw] font-bold uppercase leading-none tracking-wide font-sans text-right w-full mt-6 pb-20"
          style={{ fontFamily: "Calibri, sans-serif" }}
        >
          ENGINEER
        </motion.h4>
      </div>
    </div>
  );
};

export default Hero;