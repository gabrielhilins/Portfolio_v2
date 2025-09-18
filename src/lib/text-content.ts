// src/lib/text-content.ts
import { TextContent } from './types';
import GGABSLogo from '../../public/GGABSLogo.png'; // Importa a imagem

export const textData: Record<"pt" | "en", TextContent> = {
  pt: {
    hero: {
      greeting: "Olá, eu sou",
      name: "Gabriel Henrique Lins",
      title: "Desenvolvedor Full Stack",
      subtitle: "Especialista em construir arquiteturas robustas e escalar aplicações web de ponta a ponta.",
      cta1: "Ver Projetos",
      cta2: "Conectar",
      scrollDown: "Role para baixo",
    },
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      experience: "Experiência",
      certificates: "Certificados",
      ggabs: "GGABS",
      contact: "Contato",
    },
    about: {
      title: "Sobre Mim",
      subtitle: "Minha trajetória em Desenvolvimento de Software",
      description:
        "Sou um Desenvolvedor Full Stack formado em Sistemas para Internet pela Universidade Católica de Pernambuco (UNICAP) e, atualmente, atuo como Engenheiro de Software em Inteligência Artificial. Além disso, tenho minha própria marca de Tecnologia e Design. Tenho experiência prática em projetos acadêmicos, pessoais e freelances realizados através da minha agência, além de atuação profissional no desenvolvimento de soluções com IA.",
      passion:
        "Tenho paixão por criar soluções completas, unindo lógica de Back End e interfaces intuitivas de Front End. Além disso, meu interesse em Inteligência Artificial me motiva a desenvolver aplicações inteligentes que potencializam produtos digitais. Gosto de aprender continuamente, enfrentar desafios técnicos e aplicar boas práticas de engenharia de software para entregar sistemas eficientes, escaláveis e de impacto.",
      mission:
        "Meu objetivo é continuar evoluindo como Desenvolvedor Full Stack, contribuindo com equipes inovadoras para criar produtos digitais de alta qualidade, que unam tecnologia de ponta, inteligência artificial e valor real para usuários e negócios.",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Minhas competências e ferramentas",
      hardSkills: "Hard Skills",
      softSkills: "Soft Skills",
      categories: {
        frontend: "Desenvolvimento Frontend",
        backend: "Desenvolvimento Backend",
        design: "Design de Produto & UX/UI",
        devops: "DevOps & Cloud",
        databases: "Banco de Dados",
        methodologies: "Metodologia ágil",
        versioning: "Versionamento e Documentação",
        styling: "Estilização",
        tests: "Testes"
      },
    },
    projects: {
      title: "Projetos",
      subtitle: "Os projetos que já desenvolvi ou participei no desenvolvimento",
      viewProject: "Ver Projeto",
      viewCode: "Ver Código",
    },
    experience: {
      title: "Experiência Profissional",
      subtitle: "Minha jornada e impacto em empresas",
      present: "Present",
    },
    certificates: {
      title: "Certificados & Cursos",
      subtitle: "Minhas qualificações e aprendizado contínuo",
      viewCertificate: "Ver Certificado",
      viewDetails: "Ver Detalhes",
    },
    ggabs: {
      title: "GGABS TECH & DESIGN",
      subtitle: "Minha agência independente de soluções digitais",
      description:
        "A GGABS Tech & Design é uma agência independente especializada em soluções digitais sob medida. Atuamos na interseção entre tecnologia e design para desenvolver experiências únicas, funcionais e visualmente impactantes.",
      mission:
        "Com uma visão clara de transformar ideias em realidade, criei a GGABS para oferecer soluções digitais que impulsionam negócios e realizam sonhos. Acreditamos que todos os negócios, independentemente do tamanho, merecem ter acesso a um design de qualidade e soluções tecnológicas inovadoras.",
      services:
        "Através da GGABS, busco oferecer soluções personalizadas e acessíveis, ajudando empresas a transformarem suas ideias em realidade e alcançarem seu potencial máximo.",
      cta: "Saiba Mais sobre a GGABS",
      image: GGABSLogo,
      stats: {
        projects: "Projetos Entregues",
        clients: "Clientes Satisfeitos",
        years: "Anos de Experiência",
        team: "Profissionais no Time",
      },
    },
    contact: {
      title: "Conecte-se Comigo",
      subtitle: "Para oportunidades, colaborações ou discussões técnicas",
      description:
        "Estou sempre aberto a novas conexões e a discutir desafios na área de tecnologia. Seja para oportunidades de carreira, colaborações em projetos open source ou simplesmente para trocar ideias sobre as últimas tendências, sinta-se à vontade para entrar em contato.",
      form: {
        name: "Nome",
        email: "E-mail",
        message: "Mensagem",
        send: "Enviar Mensagem",
        namePlaceholder: "Seu nome completo",
        emailPlaceholder: "seu@email.com",
        messagePlaceholder: "Descreva sua proposta ou interesse...",
      },
      info: {
        email: "gabrielhilins@gmail.com",
        phone: "+55 (81) 99903-4034",
        location: "Recife, Pernambuco, Brasil",
      },
      social: "Redes Sociais",
    },
    tooltips: {
      profilePhoto: "Ir para o topo",
      toggleLanguage: "Alternar idioma",
      toggleDarkMode: "Alternar modo claro/escuro",
      mobileMenu: "Abrir/Fechar menu",
      github: "Ver perfil no GitHub",
      linkedin: "Ver perfil no LinkedIn",
      mail: "Enviar e-mail",
      resume: "Ver meu currículo (PDF)",
      viewProjects: "Navegar para a seção de projetos",
      connect: "Conectar-se para novas oportunidades",
      scrollDown: "Ir para a seção Sobre Mim",
      hardSkillItem: (skillName: string) => `Habilidade: ${skillName}`,
      softSkillItem: (skillName: string) => `Competência: ${skillName}`,
      viewProjectButton: "Acessar projeto online",
      viewCodeButton: "Ver código-fonte no GitHub",
      experienceCard: (company: string) => `Ver detalhes da experiência em ${company}`,
      certificateCard: (title: string) => `Ver detalhes do certificado: ${title}`,
      viewCertificatePdf: "Abrir certificado em formato PDF",
      viewCertificateLink: "Ver detalhes do certificado online",
      ggabsCta: "Visitar o site da GGABS Tech & Design",
      contactSubmit: "Enviar sua mensagem de contato",
      contactEmail: "Endereço de e-mail para contato",
      contactPhone: "Número de telefone para contato",
      contactLocation: "Minha localização",
      footerGithub: "Ver perfil no GitHub",
      footerLinkedin: "Ver perfil no LinkedIn",
      footerMail: "Enviar e-mail",
      footerInstagram: "Ver perfil no Instagram",
      footerWhatsapp: "Falar no WhatsApp",
      lattes: "Ver meu Currículo Lattes CNPq"
    }
  },
  en: {
    hero: {
      greeting: "Hello, I'm",
      name: "Gabriel Henrique Lins",
      title: "Full Stack Software Engineer",
      subtitle: "Specialist in building robust architectures and scaling end-to-end web applications.",
      cta1: "View Projects",
      cta2: "Connect",
      scrollDown: "Scroll down",
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      certificates: "Certificates",
      ggabs: "GGABS",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      subtitle: "My Journey in Software Engineering",
      description:
        "I'm a Full Stack Developer with a degree in Internet Systems from the Catholic University of Pernambuco (UNICAP), and I currently work as a Software Engineer in Artificial Intelligence. Additionally, I have my own Technology and Design brand. I have practical experience in academic, personal, and freelance projects carried out through my agency, as well as professional experience in developing AI solutions.",
      passion:
        "I'm passionate about creating complete solutions, combining backend logic with intuitive frontend interfaces. My interest in Artificial Intelligence also motivates me to develop intelligent applications that enhance digital products. I enjoy continuous learning, facing technical challenges, and applying software engineering best practices to deliver efficient, scalable, and impactful systems.",
      mission:
        "My goal is to continue growing as a Full Stack Developer, contributing to innovative teams to create high-quality digital products that merge cutting-edge technology, artificial intelligence, and real value for users and businesses.",
    },
    skills: {
      title: "Skills",
      subtitle: "My competencies and tools",
      hardSkills: "Hard Skills",
      softSkills: "Soft Skills",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        design: "Product Design & UX/UI",
        devops: "DevOps & Cloud",
        databases: "Databases",
        methodologies: "Agile Methodology",
        versioning: "Versioning & Documentation",
        styling: "Styling",
        tests: "Testing"
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Case studies and technical contributions",
      viewProject: "View Project",
      viewCode: "View Code",
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My journey and impact in companies",
      present: "Present",
    },
    certificates: {
      title: "Certificates & Courses",
      subtitle: "My qualifications and continuous learning",
      viewCertificate: "View Certificate",
      viewDetails: "View Details",
    },
    ggabs: {
      title: "GGABS TECH & DESIGN",
      subtitle: "My independent digital solutions agency",
      description:
        "GGABS Tech & Design is an independent agency specializing in tailor-made digital solutions. We operate at the intersection of technology and design to develop unique, functional, and visually impactful experiences.",
      mission:
        "With a clear vision to turn ideas into reality, I created GGABS to offer digital solutions that boost businesses and fulfill dreams. We believe that all businesses, regardless of size, deserve access to quality design and innovative technological solutions.",
      services:
        "Through GGABS, I aim to offer personalized and accessible solutions, helping companies transform their ideas into reality and reach their full potential.",
      cta: "Learn More about GGABS",
      image: GGABSLogo,
      stats: {
        projects: "Projects Delivered",
        clients: "Satisfied Clients",
        years: "Years of Experience",
        team: "Team Professionals",
      },
    },
    contact: {
      title: "Connect With Me",
      subtitle: "For opportunities, collaborations, or technical discussions",
      description:
        "I'm always open to new connections and discussing challenges in the tech field. Whether for career opportunities, open-source collaborations, or simply to exchange ideas about the latest trends, feel free to get in touch.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        namePlaceholder: "Your full name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Describe your proposal or interest...",
      },
      info: {
        email: "gabrielhilins@gmail.com",
        phone: "+55 (81) 99903-4034",
        location: "Recife, Pernambuco, Brazil",
      },
      social: "Social Networks",
    },
    tooltips: {
      profilePhoto: "Go to top",
      toggleLanguage: "Toggle language",
      toggleDarkMode: "Toggle light/dark mode",
      mobileMenu: "Open/Close mobile menu",
      github: "View GitHub profile",
      linkedin: "View LinkedIn profile",
      mail: "Send an email to Gabriel",
      resume: "View my resume (PDF)",
      viewProjects: "Navigate to projects section",
      connect: "Connect for opportunities",
      scrollDown: "Go to About Me section",
      hardSkillItem: (skillName: string) => `Skill: ${skillName}`,
      softSkillItem: (skillName: string) => `Competency: ${skillName}`,
      viewProjectButton: "Access live project",
      viewCodeButton: "View source code on GitHub",
      experienceCard: (company: string) => `View experience details at ${company}`,
      certificateCard: (title: string) => `View certificate details: ${title}`,
      viewCertificatePdf: "Open certificate in PDF format",
      viewCertificateLink: "View certificate details online",
      ggabsCta: "Visit GGABS Tech & Design website",
      contactSubmit: "Send your message",
      contactEmail: "Contact email address",
      contactPhone: "Contact phone number",
      contactLocation: "My location",
      footerGithub: "View GitHub profile",
      footerLinkedin: "View LinkedIn profile",
      footerMail: "Send an email",
      footerInstagram: "View Instagram profile",
      footerWhatsapp: "Chat on WhatsApp",
      lattes: "Lattes CNPq Resume"
    }
  },
};