// src/lib/experiences-data.ts
import { Experience } from './types';
import GGABSLogo from '../../public/LogoTipo Fundo Azul e branco.png';
import Tpf from '../../public/tpf_logo.jpg';
import Unicap from '../../public/logo_unicap-universidade-catolica-de-pernambuco_WhD7Lu.png';
import Cesar from '../../public/cesar_logo.jpg';
import Aicury from '../../public/1701196833623.jpg';
import Cmr from '../../public/Logo_CMR_Corel_x8_2018_Versão_2021.png';

export const experiencesData: Experience[] = [
  {
    id: 1,
    type: 'professional',
    logo: GGABSLogo,
    link: "https://ggabstechdesign.com.br/",
    companyKey: "exp_ggabs_company",
    positionKey: "exp_ggabs_position",
    locationKey: "exp_ggabs_location",
    startDateKey: "exp_ggabs_startDate",
    endDateKey: "exp_ggabs_endDate",
    descriptionKey: "exp_ggabs_desc",
    skills: ["React", "Next.js", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
    hiringModelKey: "hiring_model_self_employed",
    workModelKey: "work_model_remote"
  },
  {
    id: 2,
    type: 'professional',
    logo: Aicury,
    link: "https://www.aicury.com/",
    companyKey: "exp_aicury_company",
    positionKey: "exp_aicury_position",
    locationKey: "exp_aicury_location",
    startDateKey: "exp_aicury_startDate",
    endDateKey: "exp_aicury_endDate",
    descriptionKey: "exp_aicury_desc",
    skills: ["Vue.js", "Python", "Spring Boot", "PostgreSQL", "Kafka", "Redis"],
    hiringModelKey: "hiring_model_cnpq",
    workModelKey: "work_model_remote"
  },
  {
    id: 3,
    type: 'professional',
    logo: Tpf,
    link: "https://www.tpfengenharia.com.br/",
    companyKey: "exp_tpf_company",
    positionKey: "exp_tpf_position",
    locationKey: "exp_tpf_location",
    startDateKey: "exp_tpf_startDate",
    endDateKey: "exp_tpf_endDate",
    descriptionKey: "exp_tpf_desc",
    skills: ["React", "TypeScript", "Sass", "Jest", "Storybook", "Figma"],
    hiringModelKey: "hiring_model_temporary",
    workModelKey: "work_model_presential"
  },
  {
    id: 4,
    type: 'professional',
    logo: Cesar,
    link: "https://www.cesar.org.br/",
    companyKey: "exp_cesar_company",
    positionKey: "exp_cesar_position",
    locationKey: "exp_cesar_location",
    startDateKey: "exp_cesar_startDate",
    endDateKey: "exp_cesar_endDate",
    descriptionKey: "exp_cesar_desc",
    skills: ["Selenium", "Cypress", "Jira", "Postman", "TypeScript"],
    hiringModelKey: "hiring_model_temporary",
    workModelKey: "work_model_remote"
  },
  {
    id: 5,
    type: 'academic',
    logo: Unicap,
    link: "https://portal.unicap.br/",
    companyKey: "exp_unicap_company",
    positionKey: "exp_unicap_position",
    locationKey: "exp_unicap_location",
    startDateKey: "exp_unicap_startDate",
    endDateKey: "exp_unicap_endDate",
    descriptionKey: "exp_unicap_desc",
    skills: ["Java", "Spring Framework", "MySQL", "Docker"],
    workModelKey: "work_model_presential"
  },
  {
    id: 6,
    type: 'academic',
    logo: Cmr,
    link: "https://cmr.eb.mil.br/",
    companyKey: "exp_cmr_company",
    positionKey: "exp_cmr_position",
    locationKey: "exp_cmr_location",
    startDateKey: "exp_cmr_startDate",
    endDateKey: "exp_cmr_endDate",
    descriptionKey: "exp_cmr_desc",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    workModelKey: "work_model_presential"
  },
];