"use client";

import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

import { Card, CardContent } from "@/components/ui/card";
import { Experience } from "@/lib/types";
import Image from "next/image";
import { experiencesData } from "@/lib/experiences-data";

export default function ExperienceSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<'professional' | 'academic'>('professional');

  const filteredExperiences = experiencesData.filter(exp => exp.type === activeCategory);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 rounded-lg shadow-xl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {t('experience_title')}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in">
            {t('experience_subtitle')}
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 animate-fade-in">
          <button
            onClick={() => setActiveCategory('professional')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out cursor-pointer
              ${
                activeCategory === 'professional'
                  ? 'bg-secondary text-primary-foreground shadow-md'
                  : 'bg-background text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
          >
            {t('experience_professional')}
          </button>
          <button
            onClick={() => setActiveCategory('academic')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out cursor-pointer
              ${
                activeCategory === 'academic'
                  ? 'bg-secondary text-primary-foreground shadow-md'
                  : 'bg-background text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
          >
            {t('experience_academic')}
          </button>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

          <div className="space-y-12">
            {filteredExperiences.length > 0 ? (
              filteredExperiences.map((exp: Experience) => (
                <div key={exp.id} className="relative flex items-start gap-8 animate-slide-up">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg z-10 p-2 overflow-hidden">
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={t(exp.companyKey)}
                        className="h-full w-full object-cover rounded-full bg-white"
                        width={64}
                        height={64}
                      />
                    ) : (
                      exp.type === 'professional' ? (
                        <FaBriefcase className="h-8 w-8 text-white" />
                      ) : (
                        <FaGraduationCap className="h-8 w-8 text-white" />
                      )
                    )}
                  </div>

                  <Card
                    className="flex-1 hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-xl"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{t(exp.positionKey)}</h3>
                          <h4 className="text-lg font-semibold text-secondary mb-2">
                            {exp.link ? (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline hover:text-secondary-dark transition-colors duration-200"
                              >
                                {t(exp.companyKey)}
                              </a>
                            ) : (
                              t(exp.companyKey)
                            )}
                          </h4>
                        </div>
                        <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 mb-1">
                            <FaCalendarAlt className="h-4 w-4" />
                            <span>
                              {t(exp.startDateKey)} - {exp.endDateKey === 'exp_ggabs_endDate' || exp.endDateKey === 'exp_aicury_endDate' ? t('experience_present') : t(exp.endDateKey)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <IoIosPin className="h-4 w-4" />
                            <span>{t(exp.locationKey)}</span>
                          </div>
                          {exp.type === 'professional' && exp.hiringModelKey && (
                            <div className="flex items-center gap-1">
                              <FaBriefcase className="h-4 w-4" />
                              <span>{t(exp.hiringModelKey)}</span>
                            </div>
                          )}
                          {exp.workModelKey && (
                            <div className="flex items-center gap-1">
                              <IoIosPin className="h-4 w-4" /> {/* Usando MapPin para modelo de trabalho também, ou outro ícone se preferir */}
                              <span>{t(exp.workModelKey)}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-foreground leading-relaxed mb-4 text-justify">
                        {t(exp.descriptionKey)}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <h4 className="text-sm font-semibold text-foreground mb-2 w-full">
                          {t('experience_skills_title')}:
                        </h4>
                        {exp.skills && exp.skills.length > 0 ? (
                          exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium cursor-pointer"
                            >
                              {skill}
                            </span>
                          ))
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            {t('experience_no_skills')}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground text-lg">
                {t('experience_no_experience')}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}