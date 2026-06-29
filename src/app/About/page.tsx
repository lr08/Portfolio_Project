"use client";
import React from "react";
import Image from "next/image";
import { useProfile } from "@/context/ProfileContext";
import { AboutSkeleton } from "@/components/LoadingSkeleton";

const About = () => {
  const { profile, isLoading } = useProfile();

  if (isLoading || !profile) return <AboutSkeleton />;

  return (
    <div className="bg-black text-white min-h-screen px-10 md:px-32 py-20 pt-32 md:pt-40">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h2 className="text-3xl italic font-light">hi there, I&apos;m</h2>
        <h1 className="text-7xl md:text-8xl font-bold mt-4">{profile.name}</h1>
      </section>

      {/* Resume Section */}
      <section className="text-center mb-16">
        <h3 className="text-2xl italic font-light">the Resume</h3>
        <p
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6"
          dangerouslySetInnerHTML={{ __html: profile.bio }}
        />
      </section>

      {/* Image Section */}
      <div className="w-full flex justify-center mb-20">
        <Image
          src={profile.profile_image}
          width={800}
          height={500}
          alt="Profile"
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl h-auto rounded-lg object-cover"
        />
      </div>

      {/* Experience Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {profile.summary.map((paragraph, index) => (
          <div key={index}>
            <p className="text-lg leading-relaxed">{paragraph}</p>
          </div>
        ))}
      </section>

      {/* Software Skills Section */}
      <section className="mb-20">
        <h3 className="text-xl uppercase font-light tracking-wide">
          01 Software Skills
        </h3>
        <div className="flex flex-wrap gap-4 mt-6 text-lg">
          {profile.skills.map((skill, index) => (
            <p key={index} className="bg-gray-800 px-3 py-1 rounded-md">
              {skill}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h3 className="text-xl uppercase font-light tracking-wide">
          02 Work Experience
        </h3>
        <div className="mt-6">
          <div className="w-full border-t border-gray-500 pt-4">
            <div className="grid grid-cols-3 gap-6 text-lg font-bold border-b border-gray-500 pb-2">
              <div>Company</div>
              <div>Role</div>
              <div>Duration</div>
            </div>
            {profile.experience.map((exp, index) =>
              exp.clients ? (
                // Parent company with clients
                <div key={index} className="border-b border-gray-700 py-2">
                  <div className="text-lg font-bold">{exp.company} </div>
                  {exp.clients.map((client, clientIndex) => (
                    <div
                      key={clientIndex}
                      className="grid grid-cols-3 gap-6 text-lg border-t border-gray-600 py-2 ml-4"
                    >
                      <div>{client.company}</div>
                      <div>{client.role}</div>
                      <div>{client.duration}</div>
                    </div>
                  ))}
                </div>
              ) : (
                // Individual experience
                <div
                  key={index}
                  className="grid grid-cols-3 gap-6 text-lg border-b border-gray-700 py-2"
                >
                  <div>{exp.company}</div>
                  <div>{exp.role}</div>
                  <div>{exp.duration}</div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h3 className="text-xl uppercase font-light tracking-wide">
          03 Licenses & Certifications
        </h3>
        <div className="w-full border-t border-gray-500 pt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg font-bold border-b border-gray-500 pb-2">
            <div>Certification</div>
            <div>Issuer</div>
            <div>Year</div>
          </div>
          {profile.certifications.map((cert, index) => (
            <div
              key={index}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg border-b border-gray-700 py-2"
            >
              <div>{cert.name}</div>
              <div>{cert.issuer}</div>
              <div>{cert.year}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
