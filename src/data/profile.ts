import { Profile } from "@/types/types";

/**
 * Static fallback profile data.
 * This is used when the MongoDB cluster is unavailable (e.g., free-tier pause).
 * Keep this in sync with the `Profile` collection in the database.
 */
export const STATIC_PROFILE: Profile = {
  name: "Lakshay Rawal",
  bio: " I have been working for the past 3 years with Java & JavaScript. I've\n          been writing/refactoring code and connecting RESTful APIs using\n          <strong> Spring boot, Angular, React,</strong> and following\n          <strong> Microservices Architecture</strong> for a complex\n          Applications, but I have also worked with different stacks in the\n          past. I can help/guide your developers with best practices as well.",
  profile_image: "/images/laptop-image.jpg",
  skills: [
    "JavaScript",
    "Angular",
    "React",
    "Next.js",
    "Git",
    "MongoDB",
    "Java",
    "SQL",
    "SpringBoot",
    "Microservices Architecture",
    "AWS Cloud",
  ],
  experience: [
    {
      company: "Ola Krutrim",
      role: "SDE 1 Cloud Development",
      duration: "Jul 2025 - Present",
    },
    {
      company: "Wipro",
      clients: [
        {
          company: "Standard Chartered Bank",
          role: "UI/UX Engineer",
          duration: "Dec 2024 - Jul 2025",
        },
        {
          company: "Hibu US",
          role: "Software Engineer",
          duration: "Sept 2023 - Sept 2024",
        },
        {
          company: "United Health Care Group",
          role: "Java Developer",
          duration: "Aug 2022 - Aug 2023",
        },
      ],
    },
  ],
  projects: [
    {
      name: "DASHBOARD",
      type: "Hibu US",
      description:
        "Enterprise dashboard for analysis, integrating Inbox and assistant apps, for figuring out potential leads by client.",
    },
    {
      name: "SALESPORTAL",
      type: "Hibu US",
      description: "Migrated legacy Spring sales app to Next.js.",
    },
    {
      name: "SHOP & ORDER",
      type: "Personal Project",
      description: "Built an e-commerce platform with microservices.",
    },
    {
      name: "EMS",
      type: "Personal",
      description:
        "Developed an Employee Management System with Angular & Spring Boot.",
    },
    {
      name: "RAPTOR",
      type: "SCB",
      description:
        "Migrated a legacy Raptor Spring application to Spring Boot with a React UI, enhancing performance by 40%.",
    },
    {
      name: "INBOX",
      type: "Hibu US",
      description:
        "Contributed to Built a platform to bring assistant, notifications, and other features together for better user experience.",
    },
    {
      name: "VISION AI",
      type: "Personal Project",
      description:
        "Developed an AI-powered web application using OpenAI GPT API & React.",
    },
    {
      name: "Dashboard tool",
      type: "Hibu US",
      description:
        "A support Application for the main Dashboard used by internal business people for downloading/uploading data, raising alerts etc.",
    },
  ],
  certifications: [
    {
      name: "Front-End Developer",
      issuer: "Meta",
      year: "2025",
    },
    {
      name: "AWS Developer & Solution Architect",
      issuer: "AWS",
      year: "2024",
    },
    {
      name: "Java & JavaScript",
      issuer: "Hacker Rank",
      year: "2023",
    },
    {
      name: "Core Java L3",
      issuer: "Wipro",
      year: "2024",
    },
    {
      name: "Google Gen AI L3",
      issuer: "Wipro",
      year: "2023",
    },
  ],
  contact: {
    email: "lakshay.rawall08@gmail.com",
    phone: "+91 8383868987",
    linkedin: "https://linkedin.com/in/lakshay13",
    github: "https://github.com/lr08",
  },
  summary: [
    "As a Full-Stack Developer, I have had the opportunity to work with\n            both mid-sized and large clients on a variety of projects in\n            different industries. My experience has given me the opportunity to\n            hone my skills and develop an understanding of the unique challenges\n            that come with working on projects for these types of clients.",
    " I have also been able to build strong relationships with clients by\n            understanding their needs and providing solutions that meet their\n            expectations. My familiarity with different coding languages used in\n            today's web development projects has been extremely beneficial.",
  ],
  about:
    "Over the last 3 years, my expertise has centered around Java &\n            JavaScript, encompassing code writing, refactoring, and seamless\n            integration of RESTful APIs with frameworks like\n            <strong> Spring Boot, Angular, and React.</strong> I have worked on\n            diverse tech stacks and built robust applications. Explore my\n            projects below to witness the impact of my work.",
};
