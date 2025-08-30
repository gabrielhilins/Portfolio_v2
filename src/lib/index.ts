// src/lib/index.ts
import { textData } from './text-content';
import { projectsWithIds } from './projects-data';
import { experiencesData } from './experiences-data';
import { certificatesData } from './certificates-data';
import { hardSkillsData, softSkillsData } from './skills-data';
import { TextContent, Project, Experience, Certificate, HardSkillsCategories, SoftSkill } from './types';

interface PortfolioData {
  text: TextContent;
  projects: Project[];
  experiences: Experience[];
  certificates: Certificate[];
  hardSkills: HardSkillsCategories;
  softSkills: SoftSkill[];
}

export const portfolioData = (language: "pt" | "en"): PortfolioData => {
  return {
    text: textData[language],
    projects: projectsWithIds,
    experiences: experiencesData,
    certificates: certificatesData,
    hardSkills: hardSkillsData,
    softSkills: softSkillsData,
  };
};