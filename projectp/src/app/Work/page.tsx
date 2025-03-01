"use client";
import React, { useState, useEffect ,useRef} from "react";
import { Project } from "@/types/types";
const Work = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experienceText, setExperienceText] = useState("");
  const projectListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/profile");
      const data = await res.json();
      setProjects(data.projects);
      setExperienceText(data.about);
    }
    fetchData();
  }, []);

  const handleProjectClick = (index:number) => {
    setSelectedProject(index);
    projectListRef.current?.children[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div className="bg-black text-white min-h-screen px-10 md:px-32 py-20 pt-32 md:pt-40">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-[10vw] font-bold uppercase">Projects</h1>
        <h2 className="text-4xl italic font-light mt-2">selection</h2>
      </section>

      {/* Experience Description + Label */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: View Projects Label */}
        <div className="flex justify-start items-end h-full">
          <button className="border border-white text-white text-3xl px-6 py-3 rounded-full flex items-center space-x-3">
            <span>View Projects</span>
            <span className="text-4xl">↓</span>
          </button>
        </div>

        {/* Right: Experience Text (Fetched Dynamically) */}
        <div className="max-w-2xl text-3xl leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: experienceText }}></p>
        </div>
      </section>

      {/* Project List */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Scrollable Project Names (Left aligned & Auto-scroll) */}
        <div
          ref={projectListRef}
          className="flex flex-col space-y-6 overflow-y-auto h-[50vh] no-scrollbar hover:overflow-y-scroll"
        >
          {projects.map((project, index) => (
            <button
              key={index}
              className={`text-[3.5vw] md:text-[4vw] font-bold uppercase text-left transition-colors duration-300 ${
                selectedProject === index ? "text-white" : "text-gray-500"
              } hover:text-white`}
              onClick={() => handleProjectClick(index)}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Right: Project Description */}
        <div className="text-xl leading-relaxed">
          {selectedProject !== null ? (
            <>
              <h3 className="text-3xl font-semibold">
                {projects[selectedProject]?.name}
              </h3>
              <p className="mt-4">{projects[selectedProject]?.description}</p>
            </>
          ) : (
            <p className="text-gray-500">Click on a project to see details.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Work;
