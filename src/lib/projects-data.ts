// src/lib/projects-data.ts
import { Project } from './types';
import REF from '../../public/REF.png';
import REAL from '../../public/REAL.png';
import MARVEL from '../../public/Marvel_Logo.svg';
import RECDATERRA from '../../public/RECDATERRA.png';
import SEMPRENICEA from '../../public/SEMPRENICEA.png';
import DASHBOARDINEP from '../../public/DASHBOARDINEP.png';
import PORTFOLIOV1 from '../../public/PORTFOLIOV1.png';
import GGABSTECHDESIGN from '../../public/GGABSTECHDESIGN.png';
import Caredmindedu from '../../public/CaremindEdu.png';

export const projectsData: Project[] = [
  {
    id: 1,
    titleKey: "project_ggabs_title",
    descriptionKey: "project_ggabs_description",
    image: GGABSTECHDESIGN,
    technologies: [
      { name: "React", icon: "devicon-react-plain colored" },
      { name: "Sass", icon: "devicon-sass-original colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" },
      { name: "Swiper js", icon: "devicon-swiper-original colored" },
      { name: "Vercel", icon: "devicon-vercel-plain colored" }
    ],
    liveUrl: "https://www.ggabstechdesign.com.br/",
    featured: true,
    lastUpdated: "2025-08-06",
    labelKey: "project_label_ggabs",
    githubFrontendUrl: undefined,
    githubBackendUrl: undefined,
  },
  {
    id: 2,
    titleKey: "project_ref_title",
    descriptionKey: "project_ref_description",
    image: REF,
    technologies: [
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-plain colored" }
    ],
    liveUrl: "https://ref-gerador-abnt.vercel.app/",
    githubFrontendUrl: "https://github.com/gabrielhilins/REF_Gerador_ABNT",
    githubBackendUrl: undefined,
    featured: true,
    lastUpdated: "2025-07-03",
    labelKey: "project_label_personal"
  },
  {
    id: 3,
    titleKey: "project_semprenicea_title",
    descriptionKey: "project_semprenicea_description",
    image: SEMPRENICEA,
    technologies: [
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Sass", icon: "devicon-sass-original colored" },
      { name: "Swiper", icon: "devicon-swiper-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Spring Boot", icon: "devicon-spring-original-wordmark colored" },
      { name: "Hibernate", icon: "devicon-hibernate-plain colored" },
      { name: "Swagger", icon: "devicon-swagger-plain colored" },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-plain colored" },
    ],
    liveUrl: "https://sempre-nicea-front-neon.vercel.app/",
    githubFrontendUrl: "https://github.com/gabrielhilins/SEMPRENICEA_Frontend",
    githubBackendUrl: "https://github.com/gabrielhilins/SEMPRENICEA_Backend",
    featured: false,
    lastUpdated: "2025-06-14",
    labelKey: "project_label_academic",
    team: [
      { name: "Arthur Moraes", linkedinUrl: "https://www.linkedin.com/in/arthur-moraes-830815270/" },
      { name: "Gabriel Henrique Lins", linkedinUrl: "https://www.linkedin.com/in/gabriel-henrique-lins" },
      { name: "Jhones Bonifácio da Silva", linkedinUrl: "https://www.linkedin.com/in/jhonesbonifaciodasilva/" },
      { name: "Mayara Nascimento", linkedinUrl: "https://www.linkedin.com/in/mayarawyrlanascimento/" },
      { name: "Pedro Cezar", linkedinUrl: "https://www.linkedin.com/in/pedro-cezarr/" },
      { name: "Yuri Catunda", linkedinUrl: "https://www.linkedin.com/in/yuri-catunda-5316402a3/" },
    ]
  },
  {
    id: 4,
    titleKey: "project_portfolio_v1_title",
    descriptionKey: "project_portfolio_v1_description",
    image: PORTFOLIOV1,
    technologies: [
      { name: "React", icon: "devicon-react-plain colored" },
      { name: "Chakra UI", icon: "devicon-chakraui-plain colored"},
      { name: "Swiper js", icon: "devicon-swiper-original colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored"}
    ],
    liveUrl: "https://portfolio-gabriel-henriques-projects.vercel.app/",
    githubFrontendUrl: "https://github.com/gabrielhilins/Portfolio_v1",
    githubBackendUrl: undefined,
    featured: false,
    lastUpdated: "2025-05-12",
    labelKey: "project_label_personal"
  },
  {
    id: 5,
    titleKey: "project_real_title",
    descriptionKey: "project_real_description",
    image: REAL,
    technologies: [
      { name: "HTML", icon: "devicon-html5-plain colored"},
      { name: "CSS", icon: "devicon-css3-plain colored"},
      { name: "Javascript", icon: "devicon-javascript-plain colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-plain colored" }
    ],
    liveUrl: "https://real-iota-ivory.vercel.app/",
    githubFrontendUrl: "https://github.com/gabrielhilins/REAL_Simulator",
    githubBackendUrl: undefined,
    featured: false,
    lastUpdated: "2025-03-27",
    labelKey: "project_label_personal"
  },
  {
    id: 6,
    titleKey: "project_marvel_title",
    descriptionKey: "project_marvel_description",
    image: MARVEL,
    technologies: [
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Chakra UI", icon: "devicon-chakraui-plain colored" },
      { name: "Axios", icon: "devicon-axios-plain colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-plain colored" }
    ],
    liveUrl: "https://marvel-characters-six.vercel.app/",
    githubFrontendUrl: "https://github.com/gabrielhilins/Marvel_Characters",
    githubBackendUrl: undefined,
    featured: false,
    lastUpdated: "2024-09-01",
    labelKey: "project_label_personal",
  },
  {
    id: 7,
    titleKey: "project_recdaterra_title",
    descriptionKey: "project_recdaterra_description",
    image: RECDATERRA,
    technologies: [
      { name: "React", icon: "devicon-react-plain colored" },
      { name: "Chakra UI", icon: "devicon-chakraui-plain colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Spring", icon: "devicon-spring-original-wordmark colored" },
      { name: "Hibernate", icon: "devicon-hibernate-plain colored" },
      { name: "Swagger", icon: "devicon-swagger-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" }
    ],
    liveUrl: "https://rec-da-terra-front-end.vercel.app/",
    githubFrontendUrl: "https://github.com/gabrielhilins/RecDaTerra_FrontEnd",
    githubBackendUrl: "https://github.com/gabrielhilins/RecDaTerra_Backend",
    featured: false,
    lastUpdated: "2024-06-08",
    labelKey: "project_label_academic",
    team: [
      { name: "Arthur Moraes", linkedinUrl: "https://www.linkedin.com/in/arthur-moraes-830815270/" },
      { name: "Cecília Sitcovsky", linkedinUrl: "https://www.linkedin.com/in/cecilia-sitcovsky-678919270/" },
      { name: "Gabriel Henrique Lins", linkedinUrl: "https://www.linkedin.com/in/gabriel-henrique-lins" },
      { name: "Matheus Vinícius", linkedinUrl: "https://www.linkedin.com/in/matheusviniciusgadev/" },
      { name: "Yuri Catunda", linkedinUrl: "https://www.linkedin.com/in/yuri-catunda-5316402a3/" },
    ]
  },
  {
    id: 8,
    titleKey: "project_dashboard_inep_title",
    descriptionKey: "project_dashboard_inep_description",
    image: DASHBOARDINEP,
    technologies: [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" }
    ],
    liveUrl: "https://projeto-dashboard-inep.vercel.app/",
    githubFrontendUrl: "https://github.com/gabrielhilins/Projeto-Dashboard-Inep",
    githubBackendUrl: undefined,
    featured: false,
    lastUpdated: "2024-02-28",
    labelKey: "project_label_academic",
    team: [
      { name: "Arthur Moraes", linkedinUrl: "https://www.linkedin.com/in/arthur-moraes-830815270/" },
      { name: "Gabriel Henrique Lins", linkedinUrl: "https://www.linkedin.com/in/gabriel-henrique-lins" },
      { name: "Luiz Henrique", linkedinUrl: "https://www.linkedin.com/in/luizhenriqueneto/" },
      { name: "Yuri Catunda", linkedinUrl: "https://www.linkedin.com/in/yuri-catunda-5316402a3/" },
    ]
  },
  {
    id: 9,
    titleKey: "project_caremind_edu_title",
    descriptionKey: "project_caremind_edu_description",
    image: Caredmindedu,
    technologies: [
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Canva", icon: "devicon-canva-plain colored" },
      { name: "Trello", icon: "devicon-trello-plain colored" }
    ],
    liveUrl: "https://www.figma.com/proto/BMgQQZCjrO3MEqqWg3mYnK/CaremindEdu?type=design&node-id=1-2&t=Fr8BTs7qyt9fwqD3-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
    githubFrontendUrl: undefined,
    githubBackendUrl: undefined,
    featured: false,
    lastUpdated: "2023-06-05",
    labelKey: "project_label_academic",
    team: [
      { name: "Arthur Moraes", linkedinUrl: "https://www.linkedin.com/in/arthur-moraes-830815270/" },
      { name: "Andrey Ranielly", linkedinUrl: "https://www.linkedin.com/in/arthur-moraes-830815270/" },
      { name: "Alysson Rafael", linkedinUrl: "https://www.linkedin.com/in/arthur-moraes-830815270/" },
      { name: "Alessandra Mendes", linkedinUrl: "https://www.linkedin.com/in/arthur-moraes-830815270/" },
      { name: "Gabriel Henrique Lins", linkedinUrl: "https://www.linkedin.com/in/gabriel-henrique-lins" },
      { name: "Giulia Vieira", linkedinUrl: "https://www.linkedin.com/in/gabriel-henrique-lins" },
      { name: "Kathulyn Figueroa", linkedinUrl: "https://www.linkedin.com/in/luizhenriqueneto/" },
      { name: "Matheus Oliveira", linkedinUrl: "https://www.linkedin.com/in/yuri-catunda-5316402a3/" },
    ]
  },
];