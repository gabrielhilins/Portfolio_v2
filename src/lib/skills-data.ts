import { FaLightbulb, FaBullseye, FaComments, FaClock, FaFlag, FaPuzzlePiece, FaGlobe, FaBook, FaRocket, FaHandshake, FaMicrophone, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { HardSkillsCategories, SoftSkill } from './types';
import { AiOutlineSwap } from "react-icons/ai";


// Single source of truth for hard skills data, using translation keys
export const hardSkillsData: HardSkillsCategories = {
  backend: [
    { nameKey: "skill_name_java", icon: "devicon-java-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_springboot", icon: "devicon-spring-original-wordmark colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_hibernate", icon: "devicon-hibernate-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_maven", icon: "devicon-maven-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_nodejs", icon: "devicon-nodejs-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_express", icon: "devicon-express-original colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_sequelize", icon: "devicon-sequelize-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_python", icon: "devicon-python-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_fastapi", icon: "devicon-fastapi-original colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_flask", icon: "devicon-flask-original colored", levelKey: "skill_level_basic" },
  ], 
  frontend: [
    { nameKey: "skill_name_react", icon: "devicon-react-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_typescript", icon: "devicon-typescript-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_javascript", icon: "devicon-javascript-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_html", icon: "devicon-html5-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_nextjs", icon: "devicon-nextjs-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_vite", icon: "devicon-vitejs-plain colored", levelKey: "skill_level_advanced" },
  ],
  styling: [
    { nameKey: "skill_name_css", icon: "devicon-css3-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_sass", icon: "devicon-sass-original colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_tailwind", icon: "devicon-tailwindcss-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_shadcn", icon: "https://ui.shadcn.com/apple-touch-icon.png", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_chakraui", icon: "devicon-chakraui-plain colored", levelKey: "skill_level_basic" },
  ],
  databases: [
    { nameKey: "skill_name_postgresql", icon: "devicon-postgresql-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_mysql", icon: "devicon-mysql-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_mariadb", icon: "devicon-mariadb-plain colored", levelKey: "skill_level_intermediate" },
    { nameKey: "skill_name_mongodb", icon: "devicon-mongodb-plain colored", levelKey: "skill_level_basic" },
  ],
  devops: [
    { nameKey: "skill_name_docker", icon: "devicon-docker-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_terraform", icon: "devicon-terraform-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_jenkins", icon: "devicon-jenkins-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_githubactions", icon: "devicon-githubactions-plain colored", levelKey: "skill_level_basic" },
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
  tests: [
    { nameKey: "skill_name_junit", icon: "devicon-junit-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_pytest", icon: "devicon-pytest-plain colored", levelKey: "skill_level_basic" },
    { nameKey: "skill_name_jest", icon: "devicon-jest-plain colored", levelKey: "skill_level_basic" },
    
  ],
  versioning: [
    { nameKey: "skill_name_git", icon: "devicon-git-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_github", icon: "devicon-github-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_swagger", icon: "devicon-swagger-plain colored", levelKey: "skill_level_advanced" },
    { nameKey: "skill_name_apidog", icon: "https://assets.apidog.com/static/logo/apidog-logo-256.png", levelKey: "skill_level_basic" },
  ]
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
  { nameKey: "skill_name_learning", icon: FaBook, proficiencyKey: "skill_proficiency_in_development" },
  { nameKey: "skill_name_collaborative_work", icon: FaUsers, proficiencyKey: "skill_proficiency_in_development" },
  { nameKey: "skill_name_entrepreneurship", icon: FaRocket, proficiencyKey: "skill_proficiency_in_development" },
  { nameKey: "skill_name_negotiation", icon: FaHandshake, proficiencyKey: "skill_proficiency_in_development" },
  { nameKey: "skill_name_pitch", icon: FaMicrophone, proficiencyKey: "skill_proficiency_in_development" },
  { nameKey: "skill_name_discipline", icon: FaShieldAlt, proficiencyKey: "skill_proficiency_in_development" },
];