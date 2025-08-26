"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Project } from "../lib/types";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

// Formats the date to display in `DD/MM/YYYY` format
const formatDate = (dateString: string | Date): string => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {t("projects_title")}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in">
            {t("projects_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project) => (
            <Card
              key={project.id}
              className={`group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-card flex flex-col ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <a
                href={project.liveUrl || project.githubFrontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full h-72 block"
              >
                <Image
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-60 rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {t(project.titleKey)}
                  </h3>
                  {project.labelKey && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs font-semibold">
                      {t(project.labelKey)}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-2 text-base leading-relaxed flex-grow text-justify">
                  {t(project.descriptionKey)}
                </p>

                {project.lastUpdated && (
                  <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">
                    {t("projects_lastUpdated")}{" "}
                    {formatDate(project.lastUpdated)}
                  </p>
                )}

                {t(`${project.labelKey}`) === t("project_label_academic") &&
                  project.team &&
                  project.team.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        {t("projects_team")}
                      </h4>
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {project.team.map((member, index) => (
                          <a
                            key={index}
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400"
                          >
                            <FaLinkedinIn className="h-4 w-4 mr-1" />
                            <span
                              className={
                                member.name === "Gabriel Henrique Lins"
                                  ? "font-bold"
                                  : ""
                              }
                            >
                              {member.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                <div className="mb-6 mt-auto">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {t("projects_technologies")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-1 hover:bg-primary/20 transition-colors"
                      >
                        {tech.icon && (
                          <i className={`${tech.icon} text-lg`}></i>
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 cursor-pointer"
                      >
                        <LuExternalLink className="h-4 w-4 mr-2" />
                        {t("projects_viewProject")}
                      </Button>
                    </a>
                  )}
                  {project.githubFrontendUrl && (
                    <a
                      href={project.githubFrontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="hover:bg-secondary/80 cursor-pointer"
                      >
                        <FaGithub className="h-4 w-4 mr-2" />
                        {t("projects_viewCodeFrontend")}
                      </Button>
                    </a>
                  )}
                  {project.githubBackendUrl && (
                    <a
                      href={project.githubBackendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="hover:bg-secondary/80 cursor-pointer"
                      >
                        <FaGithub className="h-4 w-4 mr-2" />
                        {t("projects_viewCodeBackend")}
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              variant={currentPage === index + 1 ? "default" : "outline"}
              className={`w-10 h-10 rounded-full transition-all duration-300 cursor-pointer border-paginate ${
                currentPage === index + 1
                  ? "bg-primary text-white"
                  : "hover:bg-primary/10"
              }`}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
      <Tooltip id="project-card-tooltip" />
      <Tooltip id="view-project-button-tooltip" />
      <Tooltip id="view-code-button-tooltip" />
    </section>
  );
}
