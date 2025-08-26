// src/lib/skills-data.ts
import { FaUsers, FaLightbulb, FaBullseye, FaComments, FaClock, FaFlag, FaBrain, FaPuzzlePiece, FaGlobe } from 'react-icons/fa';
import { HardSkillsCategories, SoftSkill } from './types';
import { IoTrendingUp } from "react-icons/io5";
import { AiOutlineSwap } from "react-icons/ai";


// Single source of truth for hard skills data, using translation keys
export const hardSkillsData: HardSkillsCategories = {
  frontend: [
    { nameKey: "skill_name_react", icon: "devicon-react-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_html", icon: "devicon-html5-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_css", icon: "devicon-css3-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_sass", icon: "devicon-sass-original colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_tailwind", icon: "devicon-tailwindcss-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_javascript", icon: "devicon-javascript-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_typescript", icon: "devicon-typescript-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_nextjs", icon: "devicon-nextjs-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_vite", icon: "devicon-vitejs-plain colored", levelKey: "skill_level_advanced" },
  ],
  backend: [
    { nameKey: "skill_name_java", icon: "devicon-java-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_springboot", icon: "devicon-spring-original-wordmark colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_junit", icon: "devicon-junit-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_nodejs", icon: "devicon-nodejs-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_express", icon: "devicon-express-original colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_python", icon: "devicon-python-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_swagger", icon: "devicon-swagger-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_postman", icon: "devicon-postman-plain colored", levelKey: "skill_level_advanced" },
  ],
  databases: [
    { nameKey: "skill_name_postgresql", icon: "devicon-postgresql-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_mysql", icon: "devicon-mysql-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_mariadb", icon: "devicon-mariadb-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_mongodb", icon: "devicon-mongodb-plain colored", levelKey: "skill_level_basic" },
  ],
  devops: [
    { nameKey: "skill_name_git", icon: "devicon-github-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_docker", icon: "devicon-docker-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_grafana", icon: "devicon-grafana-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_vercel", icon: "devicon-vercel-plain colored", levelKey: "skill_level_advanced" },
  ],
  design: [
    { nameKey: "skill_name_figma", icon: "devicon-figma-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_canva", icon: "devicon-canva-plain colored", levelKey: "skill_level_advanced" },
  ],
  methodologies: [
    { nameKey: "skill_name_trello", icon: "devicon-trello-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_notion", icon: "devicon-notion-plain", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_jira", icon: "devicon-jira-plain colored", levelKey: "skill_level_basic" },
  ],
};

// Single source of truth for soft skills data, using translation keys
export const softSkillsData: (Omit<SoftSkill, 'name' | 'proficiency'> & { nameKey: string; proficiencyKey: string })[] = [
  { nameKey: "skill_name_english", icon: FaGlobe, proficiencyKey: "skill_proficiency_developed" },
  { nameKey: "skill_name_creativity", icon: FaLightbulb, proficiencyKey: "skill_proficiency_developed" },
  { nameKey: "skill_name_adaptability", icon: AiOutlineSwap, proficiencyKey: "skill_proficiency_developed" },
  { nameKey: "skill_name_leadership", icon: FaFlag, proficiencyKey: "skill_proficiency_in_development" },
  { nameKey: "skill_name_problem_solving", icon: FaPuzzlePiece, proficiencyKey: "skill_proficiency_developed" },
  { nameKey: "skill_name_results_focus", icon: FaBullseye, proficiencyKey: "skill_proficiency_developed" },
  { nameKey: "skill_name_communication", icon: FaComments, proficiencyKey: "skill_proficiency_in_development" },
  { nameKey: "skill_name_time_management", icon: FaClock, proficiencyKey: "skill_proficiency_in_development" },
  { nameKey: "skill_name_learning", icon: IoTrendingUp, proficiencyKey: "skill_proficiency_in_development" },
];