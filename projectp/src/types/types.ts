export interface ClientExperience {
  company: string;
  role: string;
  duration: string;
}

export interface Experience {
  company: string;
  role?: string; // Optional for parent companies
  duration?: string; // Optional for parent companies
  clients?: ClientExperience[]; // Clients if the company is a parent
}

export interface Project {
  name: string;
  type: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  bio: string;
  profile_image: string;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  contact: ContactInfo;
  summary: string[];
  about: string;
}
