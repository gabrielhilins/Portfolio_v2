import type React from "react";


// Tipo para arquivos de imagem importados, conforme a convenção do Next.js
interface StaticImageImport {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

export interface TextContent {
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    scrollDown: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    certificates: string;
    ggabs: string;
    contact: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    passion: string;
    mission: string;
  };
  skills: {
    title: string;
    subtitle: string;
    hardSkills: string;
    softSkills: string;
    categories: {
      frontend: string;
      backend: string;
      design: string;
      devops: string;
      databases: string;
      methodologies: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
  };
  certificates: {
    title: string;
    subtitle: string;
    viewCertificate: string;
    viewDetails: string;
  };
  ggabs: {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    services: string;
    cta: string;
    stats: {
      projects: string;
      clients: string;
      years: string;
      team: string;
    };
    // Adiciona a propriedade de imagem aqui
    image: StaticImageImport; 
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
    };
    info: {
      email: string;
      phone: string;
      location: string;
    };
    social: string;
  };
  tooltips: {
    profilePhoto: string;
    toggleLanguage: string;
    toggleDarkMode: string;
    mobileMenu: string;
    github: string;
    linkedin: string;
    mail: string;
    resume: string;
    viewProjects: string;
    connect: string;
    scrollDown: string;
    hardSkillItem: (skillName: string) => string;
    softSkillItem: (skillName: string) => string;
    viewProjectButton: string;
    viewCodeButton: string;
    experienceCard: (company: string) => string;
    certificateCard: (title: string) => string;
    viewCertificatePdf: string;
    viewCertificateLink: string;
    ggabsCta: string;
    contactSubmit: string;
    contactEmail: string;
    contactPhone: string;
    contactLocation: string;
    footerGithub: string;
    footerLinkedin: string;
    footerMail: string;
    footerInstagram: string;
    footerWhatsapp: string;
    lattes: string;
  };
}

interface Technology {
  name: string;
  icon?: string;
}

export interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: StaticImageImport;
  technologies: Technology[]; 
  liveUrl: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string; 
  featured: boolean;
  lastUpdated: string;
  labelKey: "project_label_academic" | "project_label_personal" | "project_label_ggabs";
  team?: { name: string; linkedinUrl: string }[];
}

export interface Experience {
  id: number;
  type: string;
  logo: StaticImageImport;
  link: string;
  companyKey: string;
  positionKey: string;
  locationKey: string;
  startDateKey: string;
  endDateKey: string;
  descriptionKey: string;
  skills: string[];
  hiringModelKey?: string;
  workModelKey: string;
}

export interface Certificate {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: StaticImageImport; 
  pdfUrl?: string;
  issuerKey: string;
  issueDate: string;
}

export interface HardSkill {
  nameKey: string;
  icon: string;
  levelKey: string;
}

export interface SoftSkill {
  nameKey: string;
  icon: React.ElementType;
  proficiencyKey: string;
}

export interface HardSkillsCategories {
  frontend: HardSkill[];
  backend: HardSkill[];
  design: HardSkill[];
  devops: HardSkill[];
  databases: HardSkill[];
  methodologies: HardSkill[];
}