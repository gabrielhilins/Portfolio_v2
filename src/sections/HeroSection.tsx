"use client";

import type React from "react";
import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaLinkedinIn,
  FaChevronDown,
  FaFileAlt,
} from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaRegHandshake } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

import Image from "next/image";

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { t, i18n } = useTranslation();

  const getResumeURL = () => {
    return i18n.language === "en"
      ? "/Gabriel_Henrique_Lins_EN_CV.pdf"
      : "/Gabriel_Henrique_Lins_CV.pdf";
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 lg:pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse z-0"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
          <p className="text-lg text-muted-foreground mb-2 font-light animate-slide-up delay-100">
            {t("hero_greeting")}
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-slide-up delay-200 bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">
            {t("hero_name")}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 animate-slide-up delay-300">
            {t("hero_title")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 animate-slide-up delay-400">
            {t("hero_subtitle")}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-up delay-500">
            <a
              href="https://github.com/gabrielhilins"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent text-foreground transition-all duration-300 hover:-translate-y-1"
              data-tooltip-id="github-tooltip"
              data-tooltip-content={t("tooltip_github")}
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/gabriel-henrique-lins"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent text-foreground transition-all duration-300 hover:-translate-y-1"
              data-tooltip-id="linkedin-tooltip"
              data-tooltip-content={t("tooltip_linkedin")}
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>
            <a
              href={getResumeURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent text-foreground transition-all duration-300 hover:-translate-y-1"
              data-tooltip-id="resume-tooltip"
              data-tooltip-content={t("tooltip_resume")}
            >
              <FaFileAlt className="h-6 w-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-slide-up delay-600">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 hover:cursor-pointer"
            >
              <GrProjects className="h-5 w-5" />
              {t("hero_cta1")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-secondary text-secondary transition-all duration-300 flex items-center gap-2 hover:cursor-pointer"
            >
              <FaRegHandshake className="h-5 w-5" />
              {t("hero_cta2")}
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center items-center animate-fade-in order-1 lg:order-2">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-secondary rounded-full opacity-10 blur-3xl animate-blob -z-10"></div>
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] animate-slide-up">
            <Image
              src="/DSC_5650.png"
              alt={t("hero_name")}
              layout="fill"
              objectFit="cover"
              className="rounded-full object-top border-4 border-secondary/80 shadow-2xl shadow-secondary/20"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center animate-bounce z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center text-muted-foreground transition-all duration-200 hover:-translate-y-1"
          data-tooltip-id="scroll-down-tooltip"
          data-tooltip-content={t("tooltip_scrollDown")}
        >
          <span className="text-sm mb-1">{t("hero_scrollDown")}</span>
          <FaChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
